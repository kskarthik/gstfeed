// A script wich converts the news items from the GST portal as a rss feed
// License: GPLv3

import { Atom } from "jsr:@feed/feed";

let fileName = "feed.xml";

const atomFeed = new Atom({
  title: "GST News & Updates",
  description: "News and updates from the GST Portal",
  link: "https://www.gst.gov.in/",
  authors: [
    {
      name: "GST India",
      email: "test@example.org",
    },
  ],
  updated: new Date(),
  id: "https://www.gst.gov.in",
});

// return date as per atom spec
function formatDate(d: string) {
  const date = d.split("/").reverse().join("-");
  return new Date(date);
}

async function fetchPayload() {
  console.info("Fetching news from the GST portal");
  const r = await fetch("https://www.gst.gov.in/fomessage/newsupdates");
  const data = await r.json();

  if (r.status != 200) {
    console.error("Failed to fetch the data");
    Deno.exit(1);
  }

  console.info("Generating feeds ...");

  for (const item of data.data) {
    atomFeed.addItem({
      title: `[${item.module}] ${item.title}`,
      link: `https://www.gst.gov.in/newsandupdates/read/${item.id}`,
      id: `${item.id}`,
      updated: formatDate(item.date),
      summary: item.title,
      content: {
        body: item.content,
        type: "html",
      },
    });
  }
  // export to a file
  try {
    Deno.writeTextFileSync(`${fileName}`, atomFeed.build());
    console.error(`Saved to ${fileName}`);
  } catch (e) {
    console.error(`failed to save file: ${fileName}\n${e}`);
    Deno.exit(1);
  }
}

function main() {
  const args = Deno.args;

  if (args.length == 1) {
    fileName = args[0];
    fetchPayload();
    return;
  }

  fetchPayload();
}
main();

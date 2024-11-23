# gstfeed

A simple tool which converts News and updates from the Indian [GST portal](https://gst.gov.in) as RSS (atom) feeds
which can then be used in various integrations (like feed readers, bots)

# Installation

## Build Requirements
- [Deno](https://deno.com)

## Usage
To run the script:

```
deno run main.ts
```

This will generate the `feed.xml` in the same directory which can be copied to any location of choice.

The script optionally accepts custom path to the feed output as first argument

```
deno run main.ts /path/to/feed.xml
```

To compile as binary:

```
deno task build
```

For development

```
deno task dev
```

# License

this script is licensed under the GNU `GPLv3`

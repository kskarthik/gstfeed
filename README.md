# gstfeed

A simple tool which converts News and updates from the Indian
[GST portal](https://gst.gov.in) as RSS (atom) feeds which can then be used in
various integrations (like feed readers, bots)

Demo Feed url (refreshed every 12 hours):
[https://kskarthik.github.io/gstfeed/feed.xml](https://kskarthik.github.io/gstfeed/feed.xml)

![image](https://github.com/user-attachments/assets/d4dbd40c-399b-4155-8694-cc77f588e0bc)

# Installation

## Build Requirements

- [Deno](https://deno.com)

## Usage

To run the script:

```
deno task run
```

This will generate the `feed.xml` in the same directory which can be copied to
any location of choice.

The script optionally accepts custom path to the feed file as first argument

```
deno task run /path/to/feed.xml
```

To compile as binary:

```
deno task build
```

For development:

```
deno task dev
```

# License

This script is licensed under the GNU `GPLv3`

![Cover image](_docs/cover.png)

# notion-page-to-html-api

Vercel API wrapper to [notion-page-to-html library](https://github.com/asnunes/notion-page-to-html). It converts public notion pages to html.

## Supported features

Most of native Notion blocks are currently supported:

- Headings
- Text With Decorations
- Quote
- Image
- YouTube Videos
- Code
- Math Equations
- To-do
- Checkbox
- Bulleted Lists
- Numbered Lists
- Toggle Lists
- Divider
- Callout
- Nested blocks

Embeds and tables are not supported yet.

## Basic Usage

### GET `/html`

Returns full Notion page as html.

It accepts one single query param: `id`. It's the Notion Page uuid at the end of page's link like example bellow

`https://www.notion.so/asnunes/Simple-Page-Text-2-`**4d64bbc0634d4758befa85c5a3a6c22f**

Page must be public when request is sent. It can be private afterward. All images dependencies are converted to base64 to prevent further Notion API calls.

API call example:

[https://notion-page-to-html-api.vercel.app/html?id=4d64bbc0634d4758befa85c5a3a6c22f](https://notion-page-to-html-api.vercel.app/html?id=4d64bbc0634d4758befa85c5a3a6c22f)

### GET `/cover`

Returns Notion page cover image if it exists. If no cover is found, it returns 404.

It accepts one single query param: `id`. It's exactly like `/html` route.

API call example:

[https://notion-page-to-html-api.vercel.app/cover?id=4d64bbc0634d4758befa85c5a3a6c22f](https://notion-page-to-html-api.vercel.app/cover?id=4d64bbc0634d4758befa85c5a3a6c22f)

### GET `/icon`

Returns Notion page icon if it exists. It can be an image (custom icon) or plain/text (emoji). If no icon is found, it returns 404.

It accepts one single query param: `id`. It's exactly like `/html` route.

API call example:

[https://notion-page-to-html-api.vercel.app/icon?id=4d64bbc0634d4758befa85c5a3a6c22f](https://notion-page-to-html-api.vercel.app/icon?id=4d64bbc0634d4758befa85c5a3a6c22f)

### GET `/title`

Returns Notion page title as plain text.

It accepts one single query param: `id`. It's exactly like `/html` route.

API call example:

[https://notion-page-to-html-api.vercel.app/title?id=4d64bbc0634d4758befa85c5a3a6c22f](https://notion-page-to-html-api.vercel.app/title?id=4d64bbc0634d4758befa85c5a3a6c22f)

This project was deployed on [Vercel](https://vercel.com/). Feel free to host it by yourself if it pleases you.

# Metafy on Vercel

![vercel-metafy](https://vercelbadge.vercel.app/api/one-tab-group/metafy)

> Easily scrape metadata from websites as a service.

## Usage

Enter a valid `$URL` as params

```bash
curl https://metafy.vercel.app/api?url=$URL
```

## Example

### Input

```bash
curl https://metafy.vercel.app/api?url=https://github.com/one-tab-group/vercel-metafy
```

### Output

```json
{
  "author": "one-tab-group",
  "description": "Easily scrape metadata from websites as a service. - GitHub - one-tab-group/vercel-metafy: Easily scrape metadata from websites as a service.",
  "image": "https://opengraph.githubassets.com/573d8cfe6211260f1a511e86cd042858b6aadb1a7a20b9e07fff9b779f54654b/one-tab-group/vercel-metafy",
  "logo": "https://github.com/fluidicon.png",
  "publisher": "GitHub",
  "title": "GitHub - one-tab-group/vercel-metafy: Easily scrape metadata from websites as a service."
}
```

## Deploy your own instance

Deploy your `Metafy` on your own instance with one-click.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fone-tab-group%2Fvercel-metafy)

## Tech Stack

- [vercel](https://vercel.com/) - Develop. Preview. Ship. For the best frontend teams.
- [metascraper](https://metascraper.js.org/) - metascraper, easily scrape metadata from an article on the web.
- [typescript](https://www.typescriptlang.org/) - Typed JavaScript at Any Scale.
- [got](https://github.com/sindresorhus/got) - 🌐 Human-friendly and powerful HTTP request library for Node.js
- [esno](https://github.com/antfu/esno) - TypeScript / ESNext node runtime powered by esbuild

## License

MIT [xiaoluoboding](https://github.com/xiaoluoboding)

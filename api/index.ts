import { VercelRequest, VercelResponse } from '@vercel/node'
import got from 'got'

const metascraper = require('metascraper')([
  require('metascraper-author')(),
  require('metascraper-clearbit')(),
  require('metascraper-description')(),
  require('metascraper-image')(),
  require('metascraper-logo')(),
  require('metascraper-logo-favicon')(),
  require('metascraper-title')()
])

const scrapeMetaData = async (
  targetUrl: string = 'https://github.com/one-tab-group/vercel-metafy'
) => {
  const { body: html, url } = await got(targetUrl)
  const metadata = await metascraper({ html, url })
  return metadata
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const url = req.query.url as string

  try {
    require('url').parse(url)
  } catch (err) {
    res.status(400)
    res.json({ error: 'Invalid URL' })
    return
  }

  const metadata = await scrapeMetaData(url)
  res.json(metadata)
}

// for dev
// ;(async () => {
//   const res = await scrapeMetaData()
//   console.log(res)
// })()

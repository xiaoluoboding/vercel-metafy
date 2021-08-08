import { VercelRequest, VercelResponse } from '@vercel/node'
import got from 'got'

const metascraper = require('metascraper')([
  // require('metascraper-author')(),
  // require('metascraper-date')(),
  require('metascraper-description')(),
  require('metascraper-image')(),
  require('metascraper-logo')(),
  // require('metascraper-clearbit')(),
  // require('metascraper-publisher')(),
  require('metascraper-title')()
  // require('metascraper-url')()
])

const scrapeMetaData = async (targetUrl: string) => {
  const { body: html, url } = await got(targetUrl)
  const metadata = await metascraper({ html, url })
  console.log(metadata)
  return metadata
}

export default async function handler (req: VercelRequest, res: VercelResponse) {
  const url = req.query.url as string
  const metadata = await scrapeMetaData(url)
  res.json(metadata)
}

import { VercelRequest, VercelResponse } from '@vercel/node'
import got from 'got'

const metascraper = require('metascraper')([
  require('metascraper-audio')(),
  require('metascraper-author')(),
  require('metascraper-date')(),
  require('metascraper-description')(),
  require('metascraper-image')(),
  require('metascraper-logo')(),
  require('metascraper-logo-favicon')(),
  require('metascraper-media-provider')(),
  require('metascraper-title')(),
  require('metascraper-video')(),
  require('metascraper-clearbit')()
])

const scrapeMetaData = async (
  targetUrl: string = 'https://github.com/xiaoluoboding/metafy'
) => {
  const { body: html, url } = await got(targetUrl)
  const metadata = await metascraper({ html, url })
  return metadata
}

export default async function handler (req: VercelRequest, res: VercelResponse) {
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
// ;(scrapeMetaData)()
import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  sevicedomain: process.env.SERVICE_DOMAIN,
  apikey: process.env.API_KEY
})

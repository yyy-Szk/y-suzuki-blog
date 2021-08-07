import { createClient } from 'microcms-js-sdk';

const cmsClient = createClient({
  serviceDomain: process.env.CMS_SERVICE_DOMAIN,
  apiKey: process.env.API_KEY
})

export { cmsClient }

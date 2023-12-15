import nc from 'next-connect'
import dbConnect from '@/config/dbConnect'

import { createDataTag, getDataTags } from '@/controllers/data-tag'

import onError from '@/middleware/errors'

const handler = nc({ onError })

// export const config = {
//   api: {
//     responseLimit: false,
//   },
// }

dbConnect()
handler.get(getDataTags).post(createDataTag)
//   .put(updateDataTag)

export default handler

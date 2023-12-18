import nc from 'next-connect'
import dbConnect from '@/config/dbConnect'

import { searchDataTag } from '@/controllers/data-tag'

import onError from '@/middleware/errors'

const handler = nc({ onError })

// export const config = {
//   api: {
//     responseLimit: false,
//   },
// }

dbConnect()
handler.post(searchDataTag)
//   .put(updateDataTag)

export default handler

import Tag from '@/models/tag'

import catchAsyncErrors from '@/middleware/catchAsyncErrors'

export const getDataTags = catchAsyncErrors(async (req, res) => {
  // if (!data.buildNumber || !data.datatagID || !data.clockCard) {
  //   return res.json({
  //     error: 'Unlucky mate!!',
  //     status: 403,
  //   })
  // }

  const tags = await Tag.find({})

  res.status(200).json({
    message: 'OK',
    tags,
  })
})
export const createDataTag = catchAsyncErrors(async (req, res) => {
  let data = req.body

  // if (!data.buildNumber || !data.datatagID || !data.clockCard) {
  //   return res.json({
  //     error: 'Unlucky mate!!',
  //     status: 403,
  //   })
  // }

  const dataForDb = {
    buildNumber: data.finalBuildNumber,
    tagNumber: data.datatagID,
    clockCardNumber: data.clockCard,
  }

  let foundBuildNumber = await Tag.findOne({
    buildNumber: dataForDb.buildNumber,
  })
  let foundTagNumber = await Tag.findOne({
    tagNumber: dataForDb.tagNumber,
  })

  if (foundBuildNumber) {
    return res.json({
      error: 'Build number alreday exists',
      status: 400,
    })
  }

  if (foundTagNumber) {
    return res.json({
      error: 'Tag number alreday exists',
      status: 400,
    })
  }

  const newTag = Tag.create(dataForDb)

  res.status(200).json({
    message: 'OK',
  })
})

export const searchDataTag = catchAsyncErrors(async (req, res) => {
  let buildNumber = req.body.searchBuildNumber

  console.log(buildNumber)
  const found = await Tag.findOne({
    buildNumber,
  })

  if (!found) {
    return res.json({
      error: 'Build number not found',
      status: 400,
    })
  }

  res.status(200).json({
    message: 'OK',
    found,
  })
})

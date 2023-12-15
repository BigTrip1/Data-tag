import mongoose from 'mongoose'
const { ObjectId } = mongoose.Schema

const tagSchema = new mongoose.Schema(
  {
    // strings
    buildNumber: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    tagNumber: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    clockCardNumber: {
      type: String,
      required: true,
      trim: true,
    },

    //numbers

    //dates

    //booleans

    //objectIds

    //array
  },
  { timestamps: true }
)

export default mongoose.models.Tag || mongoose.model('Tag', tagSchema)

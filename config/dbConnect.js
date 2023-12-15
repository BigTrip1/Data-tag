import mongoose from 'mongoose'

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) {
    return
  }

  mongoose
    .connect(process.env.DB_URI, {
      // useNewUrlParser: true,
      useUnifiedTopology: true,
      family: 4,
    })
    .then((con) => console.log('Connected to db'))
}

export default dbConnect

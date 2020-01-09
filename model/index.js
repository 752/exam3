const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// const BookSchema =new Schema({
//   name: String,
//   price: Number
// })

// mongoose.model("Book", BookSchema)

const AlbumSchema = new mongoose.Schema({
  album_id: String,
  album_name: String,
  public_time: String,
  week: Number,
  price: Number,
  cover: String,
  singers: []
});

mongoose.model('Album', AlbumSchema);
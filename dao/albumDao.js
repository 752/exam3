const mongoose = require('mongoose')

const albumModel = mongoose.model('Album')

// function addBook(book) {
//   return albumModel.create(book)
// }

function findAll() {
  return albumModel.find({}).exec()
}

// function deleteBook(id) {
//   return albumModel.findByIdAndRemove(id)
// }

module.exports = { findAll }
// module.exports = { addBook, findAll, deleteBook }
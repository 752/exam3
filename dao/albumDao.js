const mongoose = require('mongoose')

const albumModel = mongoose.model('Album')

function addAlbum(album) {
  return albumModel.create(album)
}

function findAll() {
  return albumModel.find({}).exec()
}

function deleteAlbum(id) {
  return albumModel.findByIdAndRemove(id)
}

module.exports = { findAll, deleteAlbum, addAlbum }
// module.exports = { addBook, findAll, deleteBook }
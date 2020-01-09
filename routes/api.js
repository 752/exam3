var express = require('express')
var router = express.Router()
const albumDao = require('../dao/albumDao')

/* GET users listing. */
router.get('/all', function(req, res) {
  // const book = req.body
  albumDao.findAll().then((data) =>{
    console.log(data)
    // const all = data.toObject()
    // console.log(all)
    res.json(data)
    // res.end('all')
  })
  .catch(err => console.log(err))
})
// router.post('/', function(req, res) {
//   console.log('addBook')
//   const book = req.body
//   bookDao.addBook(book).then((data) =>{
//     const newBook = data.toObject()
//     res.json(newBook)
//   })
//   .catch(err => console.log(err))
// })

module.exports = router

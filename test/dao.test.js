const mongoose = require('mongoose')
require('../model')
const bookDao = require('../dao/BookDao')
const assert = require('assert')

const mongodbUrl = 'mongodb://123.56.246.220/demo2'

describe('测试bookDao', function () {
  before(function (done) {
    mongoose.connect(mongodbUrl, function (err) {
      if (!err) done()
      else done(err)
    })
  })
  after(function () {
    mongoose.disconnect()
  })
  it('添加测试1', function (done) {
    bookDao.addBook({
      name: 'abc',
      price: 29
    })
    .then((data) => {
      assert.ok(data)
      done()
    })
    .catch(err => done(err))
  })
  it('添加测试2', function (done) {
    bookDao.addBook({
      name: 'cde',
      price: 'a'
    })
    .then((data) => {
      assert.ok(data)
      done()
    })
    .catch(err => done(err))
  })
})
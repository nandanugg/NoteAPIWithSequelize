const { Notes } = require('../models')
const BaseController = require('./baseController')

class NoteController extends BaseController {
  constructor() {
    super(Notes)
  }
}

module.exports = NoteController
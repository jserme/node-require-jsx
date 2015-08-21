/* global describe it */
require('../').install()

var assert = require('assert')
var tests = require('./feature.jsx')

describe('require jsx success', function() {
  it('require success', function() {
    assert(typeof tests.tpl === 'string')
    assert(typeof tests.component === 'function')
    assert(typeof tests.PI === 'number')
  })
})

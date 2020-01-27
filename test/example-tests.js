/* eslint-env mocha */

'use strict'
const examples = require('./../lib')
const chai = require('chai')
const expect = chai.expect

describe('Run some schema validation tests', function () {
  it('should check examples are returned', function () {
    expect(Object.prototype.hasOwnProperty.call(examples, 'complex')).to.equal(true)
    expect(Object.prototype.hasOwnProperty.call(examples, 'expression')).to.equal(true)
    expect(Object.prototype.hasOwnProperty.call(examples, 'set')).to.equal(true)
    expect(Object.prototype.hasOwnProperty.call(examples, 'simple')).to.equal(true)
    expect(Object.prototype.hasOwnProperty.call(examples, 'simpleFormWithBasicProblems')).to.equal(true)
  })
})

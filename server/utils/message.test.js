/*  global describe, it */

const expect = require('expect')

const {generateMessage, generateLocationMessage} = require('./message')

describe('generateMessage', () => {
  it('Should generate correct message object', () => {
    let from = 'Barone'
    let text = 'Some message'
    let message = generateMessage(from, text)

    expect(message.createAt).toBeA('number')
    expect(message).toInclude({ from, text })
  })
})

describe('generateLocationMessage', () => {
  it('Should generate correct location object', () => {
    let from = 'Barone'
    let latitude = 15
    let longitude = 19
    let url = `https://www.google.com/maps?q=15,19`

    let message = generateLocationMessage(from, latitude, longitude)
    expect(message).toInclude({ from, url })
  })
})

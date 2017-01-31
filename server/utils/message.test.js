var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');
describe('generateMessage', () => {
  it('Should generate correct message object', () => {
    var from = 'Barone';
    var text = 'Some message';
    var message = generateMessage(from, text);

    expect(message.createAt).toBeA('number');
    expect(message).toInclude({from,text})
  });
});

describe('generateLocationMessage', () => {
  it('Should generate correct location object', () => {
    var from = 'Barone'
    var latitude = 15
    var longitude = 19
    var url = `https://www.google.com/maps?q=15,19`

    var message = generateLocationMessage(from, latitude,longitude);
    expect(message).toInclude({from,url})
  });
});

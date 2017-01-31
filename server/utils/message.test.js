var expect = require('expect');
var {generateMessage} = require('./message');
describe('generateMessage', () => {
  it('Should generate correct message object', () => {
    var from = 'Barone';
    var text = 'Some message';
    var message = generateMessage(from, text);

    expect(message.createAt).toBeA('number');
    expect(message).toInclude({from,text})
  });
});
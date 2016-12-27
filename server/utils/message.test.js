let expect = require('expect');

let {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    let from = 'Jen';
    let text = 'Some message';
    let message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    let from = 'Jen';
    let longitude = 1;
    let latitude = 1;
    let url = 'https://www.google.com/maps?q=1,1';
    let location = generateLocationMessage(from, latitude, longitude);

    expect(location.createdAt).toBeA('number');
    expect(location).toInclude({from, url});
  });
})

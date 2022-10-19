const searchReplace = require('./index-START')

test('searchReplace is a function', () => {
  expect(typeof searchReplace).toEqual('function');
});

test('replaces a word in a string of text', () => {
  expect(searchReplace('He is Sleeping on the couch')).toEqual('He is Sitting on the couch');
});



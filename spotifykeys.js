var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: 'e59eb6243a084bf6aabd5ca0e2fe9fcf',
  secret: 'f4dd212db19a4bc3b3b6b75b74eb3d6e'
});

module.exports = spotify;
const DeezerPublicApi = require('deezer-public-api');
let deezer = new DeezerPublicApi();
 
//Search an artist
deezer.search.artist('ILYSH').then(function(result) {
   console.log(result);
});
 
//Get info for the given artist id
deezer.artist('58671252').then(function(result) {
   console.log(result);
});
 
//Get album list for the given artist id
deezer.artist.albums('58671252').then(function(result) {
   console.log(result);
});
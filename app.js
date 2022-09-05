//Load HTTP module
const http = require("http");
const hostname = '127.0.0.1';
const port = 3000;

const DeezerPublicApi = require('deezer-public-api');
let deezer = new DeezerPublicApi();

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateAlbumIDForDeezerAPI() {
  const randomID = getRandomInt(044456, 999999);
  return randomID;
}

const q = generateAlbumIDForDeezerAPI();

const data = deezer.album(q).then(
    function(result) {
        let titre = result['title']
        console.log(titre);
        return titre
    }
)

let value = data.then((titre) => {
  value += titre
  return value
});

//Get album list for the given random album id
function APIRequest() {
  affiche = ` Le Titre de l'album est ${value}`;
  console.log(affiche);
  return affiche
};


//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {

  //Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(APIRequest());
});


//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


var twitterInfo = require('./keys.js');
//console.log(twitterInfo);
var request = require("request");

console.log("Choose a command: my-tweets, spotify-this-song, movie-this, do-what-it-says");
var command = process.argv[2];
var movieName = '';


//if else statement to execute based on command entered
//possibly add in radio buttons
function command(choice){
if (command === "my-tweets"){
	console.log("command: my-tweets");
}else if (command === "spotify-this-song" ){
	console.log("command: spotify-this-song");
}else if (command === "movie-this") {
		movieInfo();
}else if (command === "do-what-it-says"){
	console.log("command: do-what-it-says");
}else {
	console.log("Please choose a valid command.")
};

//};

function movieInfo(movieName){
var movieName = process.argv[3];
console.log("Please enter: node liri.js movie-this <'movie title'>");

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";
// This line is just to help us debug against the actual URL.
console.log(queryUrl);
request(queryUrl, function (error, response, body) { 
  // Print the response status code if a response was received
  if (!error && response.statusCode === 200){}
  console.log('statusCode:', response && response.statusCode); 
  // Print the HTML for the OIMDB query
  console.log('body:', body); 
  //convert the response to JSON
  console.log(JSON.parse(body));
  //console log the year the movie was released
  console.log("The movie was released in the year " + JSON.parse(body).Year + ".");

	});
};


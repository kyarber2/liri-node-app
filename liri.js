var Twitter = require('twitter');

var client = require('./keys.js');
var request = require("request");
var spotify = require('./spotifykeys.js');
//console.log(client);
//console.log("Choose a command: my-tweets, spotify-this-song, movie-this, do-what-it-says");
var command = '';
var movieName = '';



//if else statement to execute based on command entered
//possibly add in radio buttons
function firstCommand(command){
	var command = process.argv[2]
		console.log("Choose a command: my-tweets, spotify-this-song, movie-this, do-what-it-says");
	if (command === "my-tweets"){
		console.log("command: my-tweets");
		getTweets();
	}else if (command === "spotify-this-song" ){
		console.log("command: spotify-this-song");
		getMusic();
	}else if (command === "movie-this") {
		//console.log("Enter the name of a movie");
			movieQuery();
	}else if (command === "do-what-it-says"){
		console.log("command: do-what-it-says");
	 };
	//else {
	// 	console.log("Please choose a valid command.")
	// };

};

firstCommand();

//var movieRequest = 
function movieQuery(movieName){
var movieName = process.argv[3];
console.log("Please enter: node liri.js movie-this <'movie title'>");
//  	};

// function movieInfo(){
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";

request(queryUrl, function (error, response, body) { 
  // Print the response status code if a response was received
  if (!error && response.statusCode === 200){
  // console.log('statusCode:', response && response.statusCode); 
  
  console.log("\nTitle: " + JSON.parse(body).Title +
  	"\nRelease Year: " + JSON.parse(body).Year +
  	"\nIMDB Rating: " + JSON.parse(body).imdbRating +
  	"\nRotten Tomatoes Rating: " + JSON.parse(body).Ratings.Value +
  	"\nCountry: " + JSON.parse(body).Country +
  	"\nLanguage: " + JSON.parse(body).Language +
  	"\nPlot: " + JSON.parse(body).Plot +
  	"\nActors: " + JSON.parse(body).Actors
  		);
	  };
	 });
	};

	function getTweets(){
	var params = {screen_name: 'reginap36036373'};
	console.log("tweets called");
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
 	 		if (!error) {
 	//console.log('statusCode:', response && response.statusCode); 
    //console.log("Tweets: " + JSON.stringify(tweets));
    		for (var i = 0; i < tweets.length; i++) {
	        	console.log(tweets[i].text + "\nDate: " + tweets[i].created_at);

  				}
			};
		});
	};
	

	function getMusic(){
		var song = process.argv[3];
		console.log("Please enter: node liri.js spotify-this-song <'song title'>");
		spotify.search({ type: 'track', query: song }, function(err, data) {
 	 	if (err) {
    	return console.log('Error occurred: ' + err);
 		 }
 
		console.log("\nTrack Title: " + data.tracks.items[0].name +
					"\n Artist(s): " + data.tracks.items[0].album.artists[0].name +
					"\nPreview Link: " + data.tracks.items[0].external_urls.spotify +
					"\n Album Name: " + data.tracks.items[0].album.name);
		});
	};



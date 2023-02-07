function getResponse() {
    // Get the value of the prompt input field
    var prompt = $("#prompt").val();
    
    // Make an API request using the jQuery AJAX method
    $.ajax({
      url: "https://api.openai.com/v1/engines/text-davinci-002/completions",
      type: "POST",
      headers: {
        "Authorization": "Bearer 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",
        "Content-Type": "application/json"
      },
      data: JSON.stringify({
        "prompt": prompt,
        "max_tokens": 1024,
        "temperature": 0.5
      }),
      success: function(response) {
        // Extract the response text
        var message = response.choices[0].text;
        
        // Update the HTML with the response text
        $("#response").html(message);
      },
      error: function(error) {
        console.log(error);
      }
    });
  }

  // search for movies based on a chosen genre using the TMDB API.

  $(document).ready(function() {
    var API_KEY = "5de60d88a55b9fbc648230694f21dd37";
  
    $("#search-btn").click(function() {
      var genreId = $("#genres").val();
      var url = "https://api.themoviedb.org/3/discover/movie?api_key=" + API_KEY + "&with_genres=" + genreId;

      //sending the request to the TMDB API and receiving a response in the form of a JSON object
  
      $.get(url, function(data, status) {
        var movies = data.results;
        var movieList = "";
  
        for (var i = 0; i < movies.length; i++) {
          movieList += "<p>" + movies[i].title + "</p>";
        }
  
        $("#movie-list").html(movieList);
      });
    });
  });
  
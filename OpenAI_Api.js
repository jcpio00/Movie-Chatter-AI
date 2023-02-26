function getResponse() {
    // Get the value of the prompt input field
    var prompt = $("#prompt").val();
    
    // Make an API request using the jQuery AJAX method
    $.ajax({
      url: "https://api.openai.com/v1/engines/text-davinci-003/completions",
      type: "POST",
      headers: {
        "Authorization": "Bearer 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",
        "Content-Type": "application/json"
      },
      data: JSON.stringify({
        "prompt": prompt,
        "max_tokens": 2024,
        "temperature": 0.7
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

  var API_KEY = "5de60d88a55b9fbc648230694f21dd37";

  $(document).ready(function() {
    $(".categories-menu li").click(function() {
      var genreId = 28; // initialize with a default genre id
      var selectedCategory = $(this).text();
  
      // get the genre id for the selected category
      switch (selectedCategory) {
        case "Action":
          genreId = 28;
          break;
        case "Adventure":
          genreId = 12;
          break;
        case "Animation":
          genreId = 16;
          break;
        case "Comedy":
          genreId = 35;
          break;
        case "Crime":
          genreId = 80;
          break;
        case "Documentary":
          genreId = 99;
          break;
        case "Drama":
          genreId = 18;
          break;
        case "Family":
          genreId = 10751;
          break;
        case "Fantasy":
          genreId = 14;
          break;
        case "History":
          genreId = 36;
          break;
        case "Horror":
          genreId = 27;
          break;
        case "Music":
          genreId = 10402;
          break;
        case "Mystery":
          genreId = 9648;
          break;
        case "Romance":
          genreId = 10770;
          break;
        case "SciFi":
          genreId = 878;
          break;
        case "Thriller":
          genreId = 53;
          break;
        case "War":
          genreId = 10752;
          break;
        case "Western":
          genreId = 37;
          break;
        default:
          genreId = 28;
      }
  
      var url = "https://api.themoviedb.org/3/discover/movie?api_key=" + API_KEY + "&with_genres=" + genreId;
  
      $.get(url, function(data, status) {
        var movieList = '<h1>' + selectedCategory + '</h1>';
        var movies = data.results.slice(0,6);

        for (var i = 0; i < movies.length; i++) {
          movieList += '<div class="movie-item ">';
          // need help getting the following line to work
          movieList += '<img src="' + movies[i].poster_path + '"></img>'
          movieList += '<h2>' + movies[i].title + '</h2>';
          movieList += '<p> Release Date: ' + movies[i].release_date + '</p>';
          movieList += '<p> Overview: ' + movies[i].overview + '</p>';
          movieList += '<p> Vote Average: ' + movies[i].vote_average + '</p>';
          movieList += '</div>';
        }
  
        $("#movie-list").html(movieList);
      });
    });
  });
  

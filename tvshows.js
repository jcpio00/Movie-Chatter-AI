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

  // search for shows based on a chosen genre using the TMDB API.

  var API_KEY = "5de60d88a55b9fbc648230694f21dd37";

  var genreIds = [10759, 16, 35, 80, 99, 18, 10751, 10762, 9648, 10763, 10764, 10765, 10766, 10767, 10768, 37];
  // generates a random genre ID
  var randomGenreId = genreIds[Math.floor(Math.random() * genreIds.length)];

$(document).ready(function() {
    // Load shows on page load
    loadShows(randomGenreId);

    // Change displayed shows on category click
    $(".categories-menu li").click(function() {
    var selectedCategory = $(this).text();

    // Get the genre id for the selected category
    switch (selectedCategory) {
      case "Action/Adventure":
        loadShows(10759);
        break;
      case "Animation":
        loadShows(16);
        break;
      case "Comedy":
        loadShows(35);
        break;
      case "Crime":
        loadShows(80);
        break;
      case "Documentary":
        loadShows(99);
        break;
      case "Drama":
        loadShows(18);
        break;
      case "Family":
        loadShows(10751);
        break;
      case "Kids":
        loadShows(10762);
        break;
      case "Mystery":
        loadShows(9648);
        break;
      case "News":
        loadShows(10763);
        break;
      case "Reality":
        loadShows(10764);
        break;
      case "Scifi/Fantasy":
        loadShows(10765);
        break;
      case "Soap":
        loadShows(10766);
        break;
      case "Talk":
        loadShows(10767);
        break;
      case "War/Politics":
        loadShows(10768);
        break;
      case "Western":
        loadShows(37);
        break;
      default:
        loadShows(10759);
    }
  });
  
      function loadShows(genreId) {
        var url = "https://api.themoviedb.org/3/discover/tv?api_key=" + API_KEY + "&with_genres=" + genreId;
        var favorites = [];
      
        $.get(url, function(data, status) {
          var shows = data.results;
          var showsList = "";
      
          for (var i = 0; i < shows.length; i++) {
            showsList += '<div class="tvshow-item" id="' + shows[i].id + '">';
            showsList += '<img src="https://image.tmdb.org/t/p/w500' + shows[i].poster_path + '">';
            showsList += '<h2>' + shows[i].name + '</h2>';
            showsList += '<p> Release Date: ' + shows[i].first_air_date + '</p>';
            showsList += '<p> Overview: ' + shows[i].overview + '</p>';
            showsList += '<p> Vote Average: ' + shows[i].vote_average + '</p>';
            showsList += '<button class="favorite-button">Favorite</button>';
            showsList += '<div class="trailer-container"></div>';
            showsList += '</div>';
          }
      
          $("#tvshow-grid").html(showsList);
      
          $(".tvshow-item").hover(function() {
            var showId = $(this).attr("id");
      
            var trailerUrl = "https://api.themoviedb.org/3/tv/" + showId + "/videos?api_key=" + API_KEY;
            $.get(trailerUrl, function(data, status) {
              var trailerKey = data.results[0].key;
              var trailerHtml = '<iframe width="100%" height="auto" src="https://www.youtube.com/embed/' + trailerKey + '" frameborder="0" allowfullscreen></iframe>';
              $("#"+showId+" .trailer-container").html(trailerHtml);
            });
          }, function() {
            $(this).find(".trailer-container").html("");
          });
      
          $(".favorite-button").click(function() {
            var showId = $(this).closest(".show-item").attr("id");
            if (favorites.includes(showId)) {
              favorites = favorites.filter(function(favorite) {
                return favorite !== showId;
              });
              $(this).text("Favorite");
            } else {
              favorites.push(showId);
              $(this).text("Unfavorite");
            }
            console.log("Favorites: " + favorites);
          });
        });
      };
});
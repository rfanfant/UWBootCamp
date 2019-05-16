// https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=IqMV5CMh0qVkg2Atb3eomZJ8a6pl0ub0&q=seattle&begin_date=19890101&end_date=20191231https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=IqMV5CMh0qVkg2Atb3eomZJ8a6pl0ub0&q=seattle&begin_date=19890101&end_date=20191231





// ======= EVENT LISTENER ====== //

// onclick event for my search button
$('#run-search').click(function(event){
  event.preventDefault();

  // capture the value of user input
  var searchTerm = $("#search-term").val();
  // console.log("SEARCH TERM: ", searchTerm)

  // add the searchTerm to our queryUrl

  var queryURL = "https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=KJzEeM0N3pVjVjSIXZjUTbGMLeqt6MKD&q="+ searchTerm +"&begin_date=19890101&end_date=20191231";

  console.log(queryURL)

  // use ajax to hit our API
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response){
    // console.log("SEARCHED FOR: ", searchTerm)
    console.log("ARTICLES: ", response.results);
  })



})
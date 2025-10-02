// #0: Listen for page load
window.addEventListener("load", initApp);

let allMovies = []; // Global array to hold all movies

// #1: Initialize the app
function initApp() {
  console.log("initApp: app.js is running 🎉");
  getMovies(); // Fetch and display movies
}

// #2: Fetch movies from JSON and display them
async function getMovies() {
  console.log("🌐 Henter alle movies fra JSON...");

  const response = await fetch(
    "https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json"
  );
  allMovies = await response.json();

  console.log(`📊 JSON data modtaget: ${allMovies.length} movies`);
  displayMovies(allMovies);
}

// #3: Render all movies in the grid
function displayMovies(movies) {
  console.log(`🎬 Viser ${movies.length} movies`);
  // Nulstil #movie-list HTML'en
  document.querySelector("#movie-list").innerHTML = "";
  // Gennemløb alle movies og kør displayMovie-funktionen for hver movie
  for (const movie of movies) {
    displayMovie(movie);
  }
}

// #4: Render a single movie card
function displayMovie(movie) {
  const movieList = document.querySelector("#movie-list");
  movieList.insertAdjacentHTML(
    "beforeend",
    /*html*/ `
    <article class="movie-card" tabindex="0">
      <img src="${movie.image}" alt="Poster of ${
      movie.title
    }" class="movie-poster" />
      <div class="movie-info">
        <h3>${movie.title} <span class="movie-year">(${movie.year})</span></h3>
        <p class="movie-genre">${movie.genre.join(", ")}</p>
        <p class="movie-rating">⭐ ${movie.rating}</p>
        <p class="movie-director"><strong>Director:</strong> ${
          movie.director
        }</p>
      </div>
    </article>
  `
  );
}

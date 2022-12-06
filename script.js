
// api 
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d38121c368bda37f4ee46886e0599a43&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=d38121c368bda37f4ee46886e0599a43&query="'


// search form dom elements
const form = document.getElementById('form');
const search = document.getElementById('search');

// get initial movies 
getMovies(API_URL)

// movies for homepage fetch
async function getMovies(url) {
  const res = await fetch(url)
  const data = await res.json()

  console.log(data.results)
}

// search entered into search bar event listner to hit API call and return search results
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_URL + searchTerm)

    search.value = ''
  } else {
    window.location.reload();
  }
})


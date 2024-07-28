import axios from 'axios';

const TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYWJkYmQ0NTVjZjhhMjhkNGI5YmQwMWUyOTA5YjE1MSIsIm5iZiI6MTcyMjE2MTE4Ny4yOTUwNjUsInN1YiI6IjY0YzZhNzNhNjNhYWQyMDIwOWE1N2M1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zXosJsercKQpsj-b_flKoR6h7mG5BZtDqNCIfwuXjKo';

const API_KEY = 'fabdbd455cf8a28d4b9bd01e2909b151';

const getTrendFilms = async () => {
  const response = await axios
    .get('https://api.themoviedb.org/3/key=fabdbd455cf8a28d4b9bd01e2909b151')
    .then(response => {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
  console.log(response);
};

getTrendFilms();

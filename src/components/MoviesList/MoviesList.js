import React from 'react';
import MovieItem from '../MovieItem/MovieItem';
import moviesList from './data';
import './MoviesList.css';

class MoviesList extends React.Component {
  state = {
    movies: moviesList
  }

  /*
    Hasta este punto la comunicación era unidireccional => Padre pasaba a los hijos información a través de las props.
    Lifting state up: La comunicación se vuelve bidireccional. El padre pasa una prop al hijo (una función) y la llamada a esa función modifica el state del padre
  */
  removeMovie = (id) => {
    this.setState({ movies: this.state.movies.filter(movie => movie.id !== id) });
  }

  sortMoviesByYear = () => {
    const arrayCopy = [ ...this.state.movies ];
    this.setState({ movies: arrayCopy.sort((movie1, movie2) => movie1.year - movie2.year )});
  }

  addMovie = () => {
    const arrayCopy = [ ...this.state.movies ];
    arrayCopy.push({ id: this.state.length, title: "Nueva película", year: "1988", runtime: "92", genres: ["Comedy", "Fantasy"], director: "Tim Burton", actors: "Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page", plot: "A couple of recently deceased ghosts contract the services of a \"bio-exorcist\" in order to remove the obnoxious new owners of their house.", posterUrl: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg" });

    this.setState({ movies: arrayCopy });
  }

  displayMovies = () => {
    // const { movies } = this.state;
    return this.state.movies.map((movie) => {
      // <MovieItem title={title} year={year} runtime={runtime} key={movie.id}/>
      return (
        // Spread operator pasará al componente MovieItem una prop por cada key tenga el objeto movie
        <MovieItem {...movie} removeItem={() => this.removeMovie(movie.id)} key={movie.id} />
      )
    })
  }

  render() {
    return (
      <div>
        <button onClick={() => this.sortMoviesByYear()}>Order by year</button>
        <button onClick={() => this.addMovie()}>Add movie</button>
        <div className="movies-container">
          {
            this.displayMovies()
          }
        </div>
      </div>
    )
  }
}

export default MoviesList;
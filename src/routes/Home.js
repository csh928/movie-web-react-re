import React from "react";
import axios from "axios";
import Movie from "../component/Movie";
import Pagenumber from "../component/Pagenumber";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
    movie_count: 0,
    limit: 0,
    page_number: 0,
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies, movie_count, limit, page_number },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({
      movies,
      movie_count,
      limit,
      page_number,
      isLoading: false,
    });
  };
  changePage = () => {};

  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies, movie_count, limit, page_number } = this.state;
    console.log(
      `movie_count:${movie_count},limit:${limit},page_number:${page_number}`
    );
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
        <div className="paging">
          <ul>
            <li onClick={this.changePage}>1</li>
            <li onClick={this.changePage}>2</li>
            <li onClick={this.changePage}>3</li>
            <li onClick={this.changePage}>4</li>
            <li onClick={this.changePage}>5</li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Home;

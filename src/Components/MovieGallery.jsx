import React from "react";
import SingleMovie from "./SingleMovie";

class MovieGallery extends React.Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    this.fetchMovies();
  }
  fetchMovies = async () => {
    const apiLink = "http://www.omdbapi.com/?apikey=ddb6f24";
    let response = await fetch(`${apiLink}&s="${this.props.title.toLowerCase()}"`);
    let moviesRequest = await response.json();
    this.setState({ movies: moviesRequest }, () => console.log(this.state.movies.Search));
  };
  render() {
    return (
      <>
        <SingleMovie title={this.props.category} movies={this.state.movies.Search} />
      </>
    );
  }
}

export default MovieGallery;

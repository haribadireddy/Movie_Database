import {Component} from 'react'

import MovieItems from '../MovieItems'

import './index.css'

class Popular extends Component {
  state = {popularMoviesList: [], isLoading: true}

  componentDidMount() {
    this.renderPopularApiCall()
  }

  renderPopularApiCall = async () => {
    const url =
      'https://api.themoviedb.org/3/movie/popular?api_key=a617ee14d0c2ccbb49b97c8632c8110a&language=en-US&page=1'
    const response = await fetch(url)
    const data = await response.json()
    const modifiedData = data.results.map(eachData => ({
      id: eachData.id,
      title: eachData.title,
      voteAverage: eachData.vote_average,
      posterPath: eachData.poster_path,
    }))
    this.setState({popularMoviesList: modifiedData, isLoading: false})
    console.log(data.results)
  }

  render() {
    const {popularMoviesList, isLoading} = this.state
    console.log(popularMoviesList)
    return (
      <>
        {!isLoading && (
          <ul className="popular-list">
            {popularMoviesList.map(eachMovie => (
              <MovieItems key={eachMovie.id} movieDetails={eachMovie} />
            ))}
          </ul>
        )}
      </>
    )
  }
}

export default Popular

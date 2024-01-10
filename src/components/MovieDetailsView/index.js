import {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
import Genre from '../Genre'
import CastItem from '../CastItem'
import './index.css'

const MovieDetailsView = () => {
  const [movieData, setMovieData] = useState({})
  const [movieCast, setMovieCast] = useState({})
  const [loading, setLoading] = useState(false)
  const location = useLocation()
  const postId = location.pathname.split('/')[2]
  console.log(postId)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res1 = await fetch(
          `https://api.themoviedb.org/3/movie/${postId}?api_key=a617ee14d0c2ccbb49b97c8632c8110a&language=en-US`,
        )
        const data = await res1.json()
        setMovieData(data)
        console.log(data)

        const res2 = await fetch(
          `https://api.themoviedb.org/3/movie/${postId}/credits?api_key=a617ee14d0c2ccbb49b97c8632c8110a&language=en-US`,
        )
        const data2 = await res2.json()
        const modifiedData2 = data2.map(eachCastItem => ({
          id: eachCastItem.id,
          originalName: eachCastItem.original_name,
          character: eachCastItem.character,
          profilePath: eachCastItem.profile_path,
        }))
        setMovieCast(modifiedData2)
        console.log(modifiedData2)
        setLoading(true)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [postId])

  return (
    <div className="movie-details-container">
      <img
        src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
        alt={movieData.title}
        className="movie-image"
      />
      <div className="details-container">
        <h1 className="movie-heading">{movieData.title}</h1>
        <p className="movie-rating">Rating: {movieData.vote_average}/10</p>
        <p className="movie-duration">{movieData.runtime} minutes</p>
        {loading && (
          <ul className="genre-list-items">
            {movieData.genres.map(eachGenre => (
              <Genre key={eachGenre.id} genreDetails={eachGenre} />
            ))}
          </ul>
        )}
        <h1 className="movie-release">{movieData.release_date}</h1>
        <h1>About The Movie</h1>
        <p>{movieData.overview}</p>
        <hr className="line" />
        {loading && (
          <ul className="cast-container">
            {movieCast.cast.map(eachCast => (
              <CastItem key={eachCast.id} castDetails={eachCast} />
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default MovieDetailsView

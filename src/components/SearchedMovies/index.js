import {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import MovieItems from '../MovieItems'
import './index.css'

const SearchedMovies = () => {
  const [searchMovie, setSearchMovie] = useState({})
  const [loading, setLoading] = useState(false)
  const location = useLocation()
  const movieName = location.pathname.split('/')[2]
  console.log(movieName)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=a617ee14d0c2ccbb49b97c8632c8110a&language=en-US&query=${movieName}&page=1`,
        )
        const data = await response.json()
        setSearchMovie(data)
        console.log(data)
        setLoading(true)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [movieName])

  return (
    <>
      {loading && (
        <ul className="popular-list">
          {searchMovie.results.map(eachMovie => (
            <MovieItems key={eachMovie.id} movieDetails={eachMovie} />
          ))}
        </ul>
      )}
    </>
  )
}

export default SearchedMovies

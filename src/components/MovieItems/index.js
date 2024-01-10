import {Link} from 'react-router-dom'
import './index.css'

const MovieItems = props => {
  const {movieDetails} = props
  const {id, title, voteAverage, posterPath} = movieDetails

  return (
    <li className="list-item">
      <img
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={title}
        className="poster-image"
      />
      <h1 className="title-heading">{title}</h1>
      <p className="rating">Rating {voteAverage}</p>
      <Link to={`/movie/${id}`}>
        <button type="button" className="details-button">
          View Details
        </button>
      </Link>
    </li>
  )
}

export default MovieItems

import './index.css'

const CastItem = props => {
  const {castDetails} = props
  const {originalName, character, profilePath} = castDetails
  return (
    <li className="cast-item">
      <img
        src={`https://image.tmdb.org/t/p/w500${profilePath}`}
        alt={originalName}
        className="cast-image"
      />
      <p className="name-1">{originalName}</p>
      <p className="name-2">{character}</p>
    </li>
  )
}

export default CastItem

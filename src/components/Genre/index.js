import './index.css'

const Genre = props => {
  const {genreDetails} = props
  const {name} = genreDetails
  return (
    <li className="genre-list">
      <p>{name} ,</p>
    </li>
  )
}

export default Genre

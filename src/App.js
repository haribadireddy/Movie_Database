import {Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Popular from './components/Popular'
import TopRatedMovies from './components/TopRatedMovies'
import UpComingMovies from './components/UpComingMovies'
import MovieDetailsView from './components/MovieDetailsView'
import SearchedMovies from './components/SearchedMovies'
import './App.css'

// write your code here
const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Popular} />
      <Route exact path="/top-rated" component={TopRatedMovies} />
      <Route exact path="/upcoming" component={UpComingMovies} />
      <Route exact path="/movie/:id" component={MovieDetailsView} />
      <Route exact path="/movies/:movieName" component={SearchedMovies} />
    </Switch>
  </>
)

export default App

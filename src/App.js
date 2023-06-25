import {Component} from 'react'

import {Route, Redirect, Switch} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {CgPlayListAdd} from 'react-icons/cg'
import {SiYoutubegaming} from 'react-icons/si'
import NxtThemeContext from './Context'

import ProtectedRoute from './components/ProtectedRoute'

import Login from './components/Login'

import Home from './components/Home'

import VideoItemDetails from './components/VideoItemDetails'

import './App.css'
import NotFound from './components/NotFound'
import SavedVideos from './components/SavedVideos'
import TrendingVideos from './components/Trending'
import Gaming from './components/Gaming'

// custom hook to get the current pathname in React

// Replace your code here
class App extends Component {
  state = {
    isDarkTheme: false,
    sideNavList: [
      {id: 1, logo: AiFillHome, path: '/', text: 'Home'},
      {id: 2, logo: HiFire, path: '/trending', text: 'Trending'},
      {id: 3, logo: SiYoutubegaming, path: '/gaming', text: 'Gaming'},
      {
        id: 4,
        logo: CgPlayListAdd,
        path: '/saved-videos',
        text: 'Saved Videos',
      },
    ],
    savedVideos: [],
  }

  addToSavedVideos = videoDetails => {
    const {savedVideos} = this.state
    const isPresent = savedVideos.includes(videoDetails)
    console.log(isPresent, 'ram')

    if (isPresent) {
      const index = savedVideos.indexOf(videoDetails)
      savedVideos.splice(index, 1)
      this.setState({savedVideos})
    } else {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, videoDetails],
      }))
    }
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  render() {
    const {isDarkTheme, sideNavList, savedVideos} = this.state
    return (
      <NxtThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
          sideNavList,
          addToSavedVideos: this.addToSavedVideos,
          savedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/trending" component={TrendingVideos} />
          <ProtectedRoute exact path="/Not-Found" component={NotFound} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <Redirect to="/Not-Found" />
        </Switch>
      </NxtThemeContext.Provider>
    )
  }
}

export default App

import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import NxtThemeContext from '../../Context'
import {
  GamesContainer,
  SideBarAndContentContainer,
  GamesContentContainer,
  GamesBanner,
  GamesLogoContainer,
  GamesTitle,
  GamesList,
} from './StyledComponents'

import Header from '../Header'
import SideBar from '../SideBar'
import LoaderBox from '../LoaderBox'
import Game from '../Game'

const apiStatus = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {gamesList: [], status: apiStatus.loading}

  componentDidMount() {
    this.getTrendingVideos()
  }

  updateData = data => ({
    id: data.id,
    thumbnailUrl: data.thumbnail_url,
    title: data.title,
    viewCount: data.view_count,
  })

  getTrendingVideos = async () => {
    this.setState({status: apiStatus.loading})
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const url = 'https://apis.ccbp.in/videos/gaming'
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const fetchedData = data.videos.map(eachItem => this.updateData(eachItem))
      this.setState({status: apiStatus.success, gamesList: fetchedData})
    } else {
      this.setState({status: apiStatus.failure})
    }
  }

  switchRender = theme => {
    const {gamesList, status} = this.state
    console.log(gamesList)
    switch (status) {
      case 'LOADING':
        return <LoaderBox />
      case 'SUCCESS':
        return (
          <GamesContentContainer>
            <GamesBanner data-testid="banner" theme={theme}>
              <GamesLogoContainer theme={theme}>
                <SiYoutubegaming />
              </GamesLogoContainer>
              <GamesTitle theme={theme}>Trending Videos</GamesTitle>
            </GamesBanner>
            <GamesList>
              {gamesList.map(eachItem => (
                <Game key={eachItem.id} details={eachItem} />
              ))}
            </GamesList>
          </GamesContentContainer>
        )
      case 'FAILURE':
        return <LoaderBox />
      default:
        return null
    }
  }

  render() {
    return (
      <NxtThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <GamesContainer theme={isDarkTheme} data-testid="gaming">
              <Header />
              <SideBarAndContentContainer>
                <SideBar />
                {this.switchRender(isDarkTheme)}
              </SideBarAndContentContainer>
            </GamesContainer>
          )
        }}
      </NxtThemeContext.Consumer>
    )
  }
}
export default Gaming

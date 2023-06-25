import NxtThemeContext from '../../Context'
import {
  NoSavedVideosContainer,
  NoSavedVideosImage,
  ErrorMessage,
  NoSavedVideosCause,
} from './StyledComponent'

const NoSavedVideos = () => (
  <NxtThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const theme = isDarkTheme ? 'dark' : ''
      return (
        <NoSavedVideosContainer>
          <NoSavedVideosImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <ErrorMessage theme={theme}>No Saved Videos found</ErrorMessage>
          <NoSavedVideosCause theme={theme}>
            You can save your videos while watching theme
          </NoSavedVideosCause>
        </NoSavedVideosContainer>
      )
    }}
  </NxtThemeContext.Consumer>
)

export default NoSavedVideos

import NxtThemeContext from '../../Context'
import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundMessage,
  NotFoundCause,
  Container,
  SideBarAndContentContainer,
} from './StyledComponents'
import Header from '../Header'
import SideBar from '../SideBar'

const NotFound = () => (
  <NxtThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const theme = isDarkTheme ? 'dark' : ''
      return (
        <Container>
          <Header />
          <SideBarAndContentContainer theme={theme}>
            <SideBar />
            <NotFoundContainer theme={theme}>
              <NotFoundImage
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                }
                alt="not found"
              />
              <NotFoundMessage theme={theme}>Page Not Found</NotFoundMessage>
              <NotFoundCause theme={theme}>
                We are sorry, the page you requested could not be found.
              </NotFoundCause>
            </NotFoundContainer>
          </SideBarAndContentContainer>
        </Container>
      )
    }}
  </NxtThemeContext.Consumer>
)

export default NotFound

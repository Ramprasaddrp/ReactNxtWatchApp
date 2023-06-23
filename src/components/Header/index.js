import {Link} from 'react-router-dom'
import {FaMoon, FaBars} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'
import NxtThemeContext from '../../Context'
import Logout from '../Logout'
import {
  HeaderContainer,
  NxtLogo,
  NavContainer,
  ListItem,
  Button,
  Profile,
  ProfileIcon,
} from './StyledComponents'

const Header = () => (
  <NxtThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme, isModalOpen} = value
      const theme = isDarkTheme ? 'dark' : ''
      const modal = isModalOpen ? 'modal' : ''
      console.log(modal)
      return (
        <HeaderContainer modal={modal} theme={theme}>
          <ListItem>
            <Link to="/">
              <NxtLogo
                alt="nxt watch logo"
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
              />
            </Link>
          </ListItem>
          <ListItem>
            <NavContainer>
              <ListItem>
                <Button theme={theme} onClick={toggleTheme} type="button">
                  {isDarkTheme ? <FiSun /> : <FaMoon />}
                </Button>
              </ListItem>
              <ListItem>
                <Profile
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </ListItem>
              <ProfileIcon>
                <FaBars />
              </ProfileIcon>
              <ListItem>
                <Logout />
              </ListItem>
            </NavContainer>
          </ListItem>
        </HeaderContainer>
      )
    }}
  </NxtThemeContext.Consumer>
)

export default Header
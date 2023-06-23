import {Link} from 'react-router-dom'
import NxtThemeContext from '../../Context'

import NavItem from '../NavItem'
import {
  SideBarContainer,
  SideNavBar,
  Heading,
  ContactIcons,
  Icon,
  Description,
} from './StyledComponents'

const SideBar = () => (
  <NxtThemeContext.Consumer>
    {value => {
      const {isDarkTheme, sideNavList} = value
      const theme = isDarkTheme ? 'dark' : ''
      return (
        <SideBarContainer theme={theme}>
          <li>
            <SideNavBar>
              {sideNavList.map(eachItem => (
                <Link
                  key={eachItem.id}
                  style={{textDecoration: 'none'}}
                  to={eachItem.path}
                >
                  <NavItem details={eachItem} />
                </Link>
              ))}
            </SideNavBar>
          </li>
          <li>
            <SideNavBar as="div">
              <Heading theme={theme}>CONTACT US</Heading>
              <ContactIcons>
                <Icon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <Icon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <Icon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </ContactIcons>
              <Description theme={theme}>
                Enjoy! Now to see your channels and recommendations!
              </Description>
            </SideNavBar>
          </li>
        </SideBarContainer>
      )
    }}
  </NxtThemeContext.Consumer>
)

export default SideBar

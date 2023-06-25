import {HiFire} from 'react-icons/hi'
import NxtThemeContext from '../../Context'
import {
  SavedVideosContainer,
  SideBarAndContentContainer,
  SavedVideosContentContainer,
  SavedVideosBanner,
  BannerLogoContainer,
  BannerTitle,
  SavedVideosList,
} from './StyledComponents'

import Header from '../Header'
import SideBar from '../SideBar'
import NoSavedVideos from '../NoSavedVideos'
import VideoItem from '../VideoItem'

const SavedVideos = () => (
  <NxtThemeContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value
      const theme = isDarkTheme ? 'dark' : ''
      console.log(savedVideos)
      return (
        <SavedVideosContainer theme={theme} data-testid="savedVideos">
          <Header />
          <SideBarAndContentContainer>
            <SideBar />
            {savedVideos.length === 0 ? (
              <NoSavedVideos />
            ) : (
              <SavedVideosContentContainer>
                <SavedVideosBanner data-testid="banner" theme={theme}>
                  <BannerLogoContainer theme={theme}>
                    <HiFire />
                  </BannerLogoContainer>
                  <BannerTitle theme={theme}>Saved Videos</BannerTitle>
                </SavedVideosBanner>
                <SavedVideosList>
                  {savedVideos.map(eachItem => (
                    <VideoItem key={eachItem.id} details={eachItem} />
                  ))}
                </SavedVideosList>
              </SavedVideosContentContainer>
            )}
          </SideBarAndContentContainer>
        </SavedVideosContainer>
      )
    }}
  </NxtThemeContext.Consumer>
)
export default SavedVideos
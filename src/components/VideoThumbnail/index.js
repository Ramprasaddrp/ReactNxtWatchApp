import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {VscCircleFilled} from 'react-icons/vsc'
import NxtThemeContext from '../../Context'
import {
  ThumbnailContainer,
  ThumbnailImage,
  ThumbnailTextContainer,
  ChannelLogo,
  Title,
  Name,
  ViewsAndTimeContainer,
} from './StyledComponents'

const VideoThumbnail = props => {
  const {details} = props
  const a = formatDistanceToNow(new Date(details.publishedAt)).split(' ')
  return (
    <NxtThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const theme = isDarkTheme ? 'dark' : ''
        return (
          <ThumbnailContainer theme={theme}>
            <Link style={{textDecoration: 'none'}} to={`/videos/${details.id}`}>
              <ThumbnailImage
                src={details.thumbnailUrl}
                alt="video thumbnail"
              />
              <ThumbnailTextContainer>
                <ChannelLogo
                  src={details.channel.profileImageUrl}
                  alt="channel logo"
                />
                <div>
                  <Title theme={theme}>{details.title}</Title>
                  <Name theme={theme}>{details.channel.name}</Name>
                  <ViewsAndTimeContainer>
                    <Name theme={theme}>{details.viewCount} views</Name>
                    <Name theme={theme} dot as="div">
                      <VscCircleFilled />
                    </Name>
                    <Name theme={theme}>
                      {a[1]} {a[2]} ago
                    </Name>
                  </ViewsAndTimeContainer>
                </div>
              </ThumbnailTextContainer>
            </Link>
          </ThumbnailContainer>
        )
      }}
    </NxtThemeContext.Consumer>
  )
}
export default VideoThumbnail

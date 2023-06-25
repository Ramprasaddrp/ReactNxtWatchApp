import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'
import {VscCircleFilled} from 'react-icons/vsc'
import NxtThemeContext from '../../Context'
import {
  Video,
  VideoThumbnailImage,
  VideoDescriptionContainer,
  VideoTitle,
  VideoDetails,
  ViewsAndTimeContainer,
} from './StyledComponents'

const VideoItem = props => {
  const {details} = props
  const a = formatDistanceToNow(new Date(details.publishedAt)).split(' ')
  return (
    <NxtThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const theme = isDarkTheme ? 'dark' : ''
        return (
          <Link style={{textDecoration: 'none'}} to={`/videos/${details.id}`}>
            <Video>
              <VideoThumbnailImage
                src={details.thumbnailUrl}
                alt="video thumbnail"
              />
              <VideoDescriptionContainer>
                <VideoTitle theme={theme}>{details.title}</VideoTitle>
                <VideoDetails theme={theme}>
                  {details.channel.name}
                </VideoDetails>
                <ViewsAndTimeContainer>
                  <VideoDetails>{details.viewCount}</VideoDetails>
                  <VideoDetails theme={theme} dot as="div">
                    <VscCircleFilled />
                  </VideoDetails>
                  <VideoDetails theme={theme}>
                    {a[1]} {a[2]} ago
                  </VideoDetails>
                </ViewsAndTimeContainer>
              </VideoDescriptionContainer>
            </Video>
          </Link>
        )
      }}
    </NxtThemeContext.Consumer>
  )
}

export default VideoItem

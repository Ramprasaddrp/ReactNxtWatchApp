import {Link} from 'react-router-dom'

import NxtThemeContext from '../../Context'
import {
  GameItem,
  GameThumbnailImage,
  GameTitle,
  GameDetails,
} from './StyledComponent'

const Game = props => {
  const {details} = props
  return (
    <NxtThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const theme = isDarkTheme ? 'dark' : ''
        return (
          <Link style={{textDecoration: 'none'}} to={`/videos/${details.id}`}>
            <GameItem>
              <GameThumbnailImage
                src={details.thumbnailUrl}
                alt="video thumbnail"
              />
              <GameTitle theme={theme}>{details.title}</GameTitle>
              <GameDetails theme={theme}>
                {details.viewCount} Watching Worldwide
              </GameDetails>
            </GameItem>
          </Link>
        )
      }}
    </NxtThemeContext.Consumer>
  )
}

export default Game

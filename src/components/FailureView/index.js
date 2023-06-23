import NxtThemeContext from '../../Context'
import {
  FailureViewContainer,
  FailureImage,
  ErrorMessage,
  FailureCause,
  RetryButton,
} from './StyledComponent'

const FailureView = props => {
  const {onClickFunction} = props
  const onClickRetry = () => {
    onClickFunction()
  }
  return (
    <NxtThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const theme = isDarkTheme ? 'dark' : ''
        return (
          <FailureViewContainer>
            <FailureImage
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure view"
            />
            <ErrorMessage theme={theme}>
              Oops! Something Went Wrong
            </ErrorMessage>
            <FailureCause theme={theme}>
              We are having to complete your request. Please try again.
            </FailureCause>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </FailureViewContainer>
        )
      }}
    </NxtThemeContext.Consumer>
  )
}

export default FailureView

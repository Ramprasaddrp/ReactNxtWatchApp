import styled from 'styled-components'

export const VideoItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#f9f9f9'};
`

export const VideoItemAndSideBar = styled.div`
  display: flex;
`

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 84vw;
`

export const Video = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 60vh;
`

export const VideoTitle = styled.div`
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#212121')};
  font-family: 'Roboto';
  font-size: 20px;
  margin: 0px;
  padding-top: 20px;
  align-self: flex-start;
`
export const HorizontalLine = styled.hr`
  width: 100%;
  border-top: 1px solid
    ${props => (props.theme === 'dark' ? '#94a3b8' : '#64748b')};
`
export const SmallDetails = styled.p`
  color: ${props => (props.theme === 'dark' ? '#94a3b8' : '#64748b')};
  font-family: 'Roboto';
  font-size: ${props => (props.dot ? '8px' : '16px')};
  margin-right: 10px;
`
export const SmallContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0px 5px 0px;
  justify-content: ${props =>
    props.spaceBetween ? 'space-between' : 'flex-start'};
`
export const LikeButton = styled.button`
  color: ${props => {
    if (props.like === 'active' || props.save === 'Saved') {
      return '#3b82f6'
    }
    if (props.theme === 'dark') {
      return '#94a3b8'
    }
    return '#64748b'
  }};
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: 'Roboto';
  font-size: 16px;
  display: flex;
  align-items: center;
`

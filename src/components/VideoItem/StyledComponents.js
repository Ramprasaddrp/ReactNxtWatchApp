import styled from 'styled-components'

export const Video = styled.li`
  display: flex;
  margin-bottom: 50px;
`

export const VideoThumbnailImage = styled.img`
  width: 400px;
  height: 210px;
  margin-right: 20px;
`
export const VideoDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
`
export const VideoTitle = styled.p`
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#212121')};
  font-family: 'Roboto';
  font-size: 16px;
  margin: 0px;
  padding-top: 0px;
`
export const VideoDetails = styled.p`
  color: ${props => (props.theme === 'dark' ? '#94a3b8' : '#64748b')};
  font-family: 'Roboto';
  font-size: ${props => (props.dot ? '12px' : '16px')};
  margin: 0px;
  padding: 0px 10px 10px 0px;
`
export const ViewsAndTimeContainer = styled.div`
  display: flex;
  margin: 0px;
  align-items: center;
`

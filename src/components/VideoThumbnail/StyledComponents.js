import styled from 'styled-components'

export const ThumbnailImage = styled.img`
  width: 100%;
`
export const ThumbnailContainer = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px 0px 20px 20px;
  width: 33%;
`
export const ThumbnailTextContainer = styled.div`
  display: flex;
  margin: 10px 0px 0px 0px;
`
export const ChannelLogo = styled.img`
  width: 50px;
  height: 50px;
`

export const Title = styled.p`
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#212121')};
  font-family: 'Roboto';
  font-size: 16px;
  margin: 0px;
  padding: 10px;
  padding-top: 0px;
`

export const Name = styled.p`
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

import styled from 'styled-components'

export const GameItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  padding: 10px;
`

export const GameThumbnailImage = styled.img`
  width: 250px;
  height:500px
  margin-right: 10px;
`
export const GameTitle = styled.p`
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#212121')};
  font-family: 'Roboto';
  font-size: 16px;
  margin: 0px;
  margin-top: 10px;
`
export const GameDetails = styled.p`
  color: ${props => (props.theme === 'dark' ? '#94a3b8' : '#64748b')};
  font-family: 'Roboto';
  font-size: ${props => (props.dot ? '12px' : '16px')};
  margin: 0px;
  padding: 0px 10px 10px 0px;
`

import styled from 'styled-components'

export const TrendingVideosContainer = styled.div`
  margin: 0px;
  display: flex;
  flex-direction: column;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
`
export const SideBarAndContentContainer = styled.div`
  display: flex;
`
export const TrendingVideosContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`
export const TrendingVideosBanner = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 20px 20px 50px;
  background-color: ${props =>
    props.theme === 'dark' ? '#222222' : '#ebebeb'};
`
export const TrendingLogoContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#d7dfe9'};
  width: 100px;
  height: 100px;
  border-radius: 50%;
  color: #ff0000;
  font-size: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const TrendingTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 40px;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
  margin-left: 30px;
`
export const TrendingVideosList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 50px;
`

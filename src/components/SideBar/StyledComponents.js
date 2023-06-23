import styled from 'styled-components'

export const SideBarContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 91vh;
  margin: 0px;
  padding: 0px;
  background-color: ${props =>
    props.theme === 'dark' ? '#313131' : '#ffffff'};
`
export const SideNavBar = styled.ul`
  width: 16vw;
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
  padding: 20px;
  margin: 0px;
`
export const ContactIcons = styled.div`
  display: flex;
  align-items: center;
  padding-left: 18px;
`
export const Icon = styled.img`
  width: 40px;
  padding-right: 10px;
`

export const Description = styled.p`
  margin: 0px;
  width: 70%;
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
  padding: 10px 10px 20px 20px;
  font-weight: 500;
`

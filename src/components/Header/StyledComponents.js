import styled from 'styled-components'

export const HeaderContainer = styled.div`
  list-style: none;
  height: 9vh;
  margin: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px 5px 15px;
  background-color: ${props =>
    props.theme === 'dark' ? '#313131' : '#ffffff'};
  filter: ${props => (props.modal === 'modal' ? 'blur(5px)' : '')};
`

export const NxtLogo = styled.img`
  width: 150px;
`

export const NavContainer = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`

export const ListItem = styled.li`
  padding-right: 10px;
`

export const Button = styled.button`
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#0f0f0f')};
  font-size: 20px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
export const Profile = styled.img`
  width: 22px;
  @media (max-width: 769px;) {
    display: none;
  }
`
export const ProfileIcon = styled.li`
  color: ${props => (props.theme === 'dark' ? '#0f0f0f' : '#ffffff')};
  font-size: 20px;
  @media (min-width: 768px) {
    display: none;
  }
`

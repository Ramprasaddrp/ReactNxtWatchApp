import React from 'react'

const NxtThemeContext = React.createContext({
  isDarkTheme: 'light',
  toggleTheme: () => {},
  sideNavList: [],
  savedVideos: [],
  addToSavedVideos: () => {},
})

export default NxtThemeContext

import React from 'react'

const NxtThemeContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
  sideNavList: [],
  savedVideos: [],
  addToSavedVideos: () => {},
})

export default NxtThemeContext

import React, { Children } from 'react'
import { Link, useHistory } from 'react-router-dom'
const AppContext = React.createContext()

const defaultState = {
  name:"",
  e_mail:"",
  date:""
}
const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [state, setState] = React.useState(defaultState)
  const history = useHistory();
  
  return (
    <>
      <AppContext.Provider
        value={{
          isLoggedIn,
          ...state,
          setState,
          setIsLoggedIn
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  )
}
export const useGlobalContext = () => {
  return React.useContext(AppContext)
}
export { AppContext, AppProvider }

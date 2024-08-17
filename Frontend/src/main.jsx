import { createContext, StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const Context = createContext({isAuthenticated:false})
const AppWrapper = ()=>{
  const[isAuthenticated , setIsAuthenticated]  = useState(false)
  const[user , setUser] = useState({})
  const [admin, setAdmin] = useState({});
  return(
    <Context.Provider value={{isAuthenticated , setIsAuthenticated , user , setUser ,admin, setAdmin}}>
       <App />
    </Context.Provider>
  )
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AppWrapper/>
  </StrictMode>,
)

export default Context

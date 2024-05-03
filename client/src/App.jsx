import { Route, Routes } from "react-router-dom"
import IndexPage from "./components/IndexPage"
import LoginPage from "./components/LoginPage"
import Layout from "./Layout"
import RegisterPage from "./components/Register"
import axios from "axios"
import { UserContextProvider } from "./userContext"
import AccountPage from "./components/AccountPage"

axios.defaults.baseURL = 'http://localhost:2000';
axios.defaults.withCredentials = true;

function App() {

  return (
    <UserContextProvider>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="/" element={<IndexPage />} />

      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/account/:subpage?' element={<AccountPage />} />
      <Route path='/account/:subpage/:action' element={<AccountPage />} />
      </Route>
     
    </Routes>
    </UserContextProvider>
    
    
  )
}

export default App
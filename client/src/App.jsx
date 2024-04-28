import { Route, Routes } from "react-router-dom"
import IndexPage from "./components/IndexPage"
import LoginPage from "./components/LoginPage"
import Layout from "./Layout"
import RegisterPage from "./components/Register"
import axios from "axios"

axios.defaults.baseURL = 'http://localhost:2000';


function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="/" element={<IndexPage />} />

      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      </Route>
     
    </Routes>
    
    
  )
}

export default App

import { Route, Routes } from "react-router-dom"
import IndexPage from "./components/IndexPage"
import LoginPage from "./components/LoginPage"
import Layout from "./Layout"
import RegisterPage from "./components/Register"
import axios from "axios"
import { UserContextProvider } from "./userContext"
import AccountPage from "./components/AccountPage"
import PlacesPage from "./components/PlacesPage"
import PlacesPageForm from "./components/PlacesPageForm"
import SinglePlacePage from "./components/SinglePlacePage"
import BookingsPage from "./components/BookingsPage"
import SingleBookingPage from "./components/SingleBookingPage"

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
      <Route path='/account' element={<AccountPage />} />
      <Route path='/account/places' element={<PlacesPage />} />
      <Route path='/account/places/new' element={<PlacesPageForm />} />
      <Route path='/account/places/:id' element={<PlacesPageForm />} />
      <Route path='/place/:id' element={<SinglePlacePage/>}/>
      <Route path='/account/bookings' element={<BookingsPage />} />
      <Route path='/account/bookings/:id' element={<SingleBookingPage />} />
      </Route>
     
    </Routes>
    </UserContextProvider>
    
    
  )
}

export default App
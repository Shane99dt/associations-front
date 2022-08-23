import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Admin from './pages/Admin'
import Association from './pages/Association'
import Associations from './pages/Associations'
import Contact from './pages/Contact'
import Home from './pages/Home'


const app = () => {
  return(
    <BrowserRouter>
      <Navbar/>
      <div className='px-4'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/associations' element={<Associations/>}/>
          <Route path='/associations/admin' element={<Admin/>}/>
          <Route path='/associations/contact' element={<Contact/>}/>
          <Route path='/associations/association/:slug' element={<Association/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default app
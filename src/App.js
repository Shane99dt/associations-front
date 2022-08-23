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
      <div className='md:px-8 px-4'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/associations' element={<Associations/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/messages' element={<Contact/>}/>
          <Route path='/associations/:slug' element={<Association/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default app
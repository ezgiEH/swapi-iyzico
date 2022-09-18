import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from 'react-router-dom'
import  Home  from  '../pages/home';
import  Starships  from  '../pages/starships';
import  Contact  from  '../pages/contact';
import  Error  from  '../pages/error';
import StarshipsDetail from '../pages/starshipsDetail';
import { Image } from '@chakra-ui/react'

  function Navbar() {
    return (
      <div className="App">
      <Router>
        <nav className='Nav'>
          <Link to="/">
              <Image  
              boxSize='120px'
              objectFit='contain' 
              src='https://www.freepnglogos.com/uploads/star-wars-logo-3.png' 
              alt='Star Wars Logo' />
          </Link>
          <Link to="/starships">Starships</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/starships/:id' element={<StarshipsDetail />} />
          <Route path="/starships" element={<Starships />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
      </div>
    );
  }
  
  export default Navbar;
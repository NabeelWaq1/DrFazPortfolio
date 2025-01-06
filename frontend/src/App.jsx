import React from 'react';
import NavBar from './components/NavBar.jsx';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Quote from './pages/Quote.jsx';
import Testimonials from './pages/Testimonials.jsx';
import SalesTraining from './pages/SalesTraining.jsx';
import Enterpreneurship from './pages/Enterpreneurship.jsx';
import Coaching from './pages/Coaching.jsx';
import Business from './pages/Business.jsx';
import Footer from './components/Footer.jsx';
import KeyNoteSpeaking from './pages/KeyNoteSpeaking.jsx';
import CorporateTraining from './pages/CorporateTraining.jsx';
import InspirationalTalks from './pages/InspirationalTalks.jsx';
import LeaderShipDev from './pages/LeaderShipDev.jsx';
import DreamBuilding from './pages/DreamBuilding.jsx';

const App = () => {
  return (
    <div className='w-full min-h-screen bg-background text-darkBlue overflow-x-hidden'>
     <NavBar/>
     <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/about' element={<About/>} />
     <Route path='/contact' element={<Contact/>} />
     <Route path='/quote' element={<Quote/>} />
     <Route path='/testimonials' element={<Testimonials/>} />
     <Route path='/leadership' element={<LeaderShipDev/>} />
     <Route path='/dreamBuilding' element={<DreamBuilding/>} />
     <Route path='/salesTraining' element={<SalesTraining/>} />
     <Route path='/enterpreneurship' element={<Enterpreneurship/>} />
     <Route path='/coaching' element={<Coaching/>} />
     <Route path='/business' element={<Business/>} />
     <Route path='/keynotespeaking' element={<KeyNoteSpeaking/>} />
     <Route path='/corporatetraining' element={<CorporateTraining/>} />
     <Route path='/inspirational' element={<InspirationalTalks/>} />
     </Routes>
     <Footer/>
    </div>
  )
}

export default App

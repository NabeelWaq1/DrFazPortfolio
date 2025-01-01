import React from 'react';
import NavBar from './components/NavBar.jsx';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Quote from './pages/Quote.jsx';
import Testimonials from './pages/Testimonials.jsx';
import SalesB2C from './pages/SalesB2C.jsx';
import SalesTraining from './pages/SalesTraining.jsx';
import GoalSetting from './pages/GoalSetting.jsx';
import Enterpreneurship from './pages/Enterpreneurship.jsx';
import Coaching from './pages/Coaching.jsx';
import Business from './pages/Business.jsx';
import Footer from './components/Footer.jsx';
import KeyNoteSpeaking from './pages/KeyNoteSpeaking.jsx';

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
     <Route path='/sales' element={<SalesB2C/>} />
     <Route path='/salesTraining' element={<SalesTraining/>} />
     <Route path='/goalSetting' element={<GoalSetting/>} />
     <Route path='/enterpreneurship' element={<Enterpreneurship/>} />
     <Route path='/coaching' element={<Coaching/>} />
     <Route path='/business' element={<Business/>} />
     <Route path='/keynotespeaking' element={<KeyNoteSpeaking/>} />
     </Routes>
     <Footer/>
    </div>
  )
}

export default App

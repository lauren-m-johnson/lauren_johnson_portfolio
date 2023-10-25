import { Route, Routes } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../../components/Footer/Footer';
import './App.css'

export default function App() {
  return (
    <>
    <NavBar />
    <Routes>
        <Route path='/' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}
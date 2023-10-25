import { Route, Routes } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'
import About from '../About/About';
import Projects from '../Projects/Projects';
import Project0 from '../../components/Project0/Project0';
import Project1 from '../../components/Project1/Project1';
import Project2 from '../../components/Project2/Project2';
import Project3 from '../../components/Project3/Project3';
import Project4 from '../../components/Project4/Project4';
import Contact from '../Contact/Contact';
import Footer from '../../components/Footer/Footer';
import './App.css'

export default function App() {
  return (
    <>
    <NavBar />
    <Routes>
        <Route path='/' element={<About />} />
        <Route path='/projects/*' element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/project0' element={<Project0 />} />
        <Route path='/project1' element={<Project1 />} />
        <Route path='/project2' element={<Project2 />} />
        <Route path='/project3' element={<Project3 />} />
        <Route path='/project4' element={<Project4 />} />
    </Routes>
    <Footer />
    </>
  )
}
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Impact from './pages/Impact'
import Stories from './pages/Stories'
import Partners from './pages/Partners'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(248,187,208,0.2),_transparent_40%)] text-slate-700">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

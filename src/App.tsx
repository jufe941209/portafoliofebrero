import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { HomePage } from './pages/HomePage'
import { CvPage } from './pages/CvPage'

export function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true, mirror: false })
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cv" element={<CvPage />} />
      </Routes>
    </BrowserRouter>
  )
}

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { LanguageProvider } from './i18n/LanguageContext'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Programs } from './pages/Programs'
import { Admissions } from './pages/Admissions'
import { CampusLife } from './pages/CampusLife'
import { About } from './pages/About'
import { Contact } from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/campus-life" element={<CampusLife />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App

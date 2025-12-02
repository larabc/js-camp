import { useRouter } from './hooks/useRouter.jsx'
import { Routes, Route } from 'react-router'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'

import { HomePage } from './pages/Home.jsx'
import { SearchPage } from './pages/Search.jsx'
import { ContactPage } from './pages/Contact.jsx'
import { NotFoundPage } from './pages/404.jsx'

function App() {
  const { currentPath } = useRouter()

  let page = <NotFoundPage />
  if (currentPath === '/') {
    page = <HomePage />
  } else if (currentPath === '/search') {
    page = <SearchPage />
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
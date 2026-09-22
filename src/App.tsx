
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, Outlet, RouterProvider, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/myfooter/Footer'
import Home from './Home'
import Project from './components/project/Project'
import SProject from './components/project/SProject'

const queryClient = new QueryClient()

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

function SiteLayout() {
  return (
    <div className="site-shell" id="top">
      <ScrollToTop />
      <Navbar />
      <main><Outlet /></main>
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <SiteLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'projects', element: <Project /> },
      { path: 'projects/:slug', element: <SProject /> },
    ],
  },
])

function App() {
  return <QueryClientProvider client={queryClient}><RouterProvider router={router} /></QueryClientProvider>
}

export default App

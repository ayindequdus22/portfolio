
import './App.css'
import Navbar from './components/navbar/Navbar'

import Project from './components/project/Project'
import Footer from './components/footer/footer'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Home from './Home'

function App() {
  const router = createBrowserRouter([{
    path: "/",
    element: <>
      <Navbar />
      <Outlet />
      <Footer />
    </>,
    children: [
      { path: '', element: <Home /> },
      { path: 'projects', element: <Project /> },
    ]

  }])
  return (
    <>

      <RouterProvider router={router} />

    </>
  )
}

export default App

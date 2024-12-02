
import './App.css'
import Navbar from './components/navbar/Navbar'

import Project from './components/project/Project'
import Footer from './components/footer/Footer'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Home from './Home'
import About from './components/about/About'

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

  },
   { path: 'about', element: <>
  <Navbar/>
   <About />
   </> },
])
  return (
    <>

      <RouterProvider router={router} />

    </>
  )
}

export default App

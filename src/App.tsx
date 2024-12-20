
import './App.css'
import Navbar from './components/navbar/Navbar'

import Project from './components/project/Project'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Home from './Home'
import About from './components/about/About'
import Footer from './components/myfooter/Footer'
import Contact from './components/contact/Contact'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import SProject from './components/project/SProject'

function App() {
  const router = createBrowserRouter([{
    path: "/",
    element: <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>,
    children: [
      { path: '', element: <Home /> },
      { path: 'projects', element: <Project /> },
     {path:"projects/id",element:<SProject/>}
    ]

  },
   { path: 'about', element: <>
  <Navbar/>
   <About />
   </> },
      { path: 'contact-me', element: <>
        <Navbar/>
         <Contact />
         </> },
])
const queryClient =  new QueryClient();
  return (
    <><QueryClientProvider client={queryClient} >


      <RouterProvider router={router} />
    </QueryClientProvider>

    </>
  )
}

export default App

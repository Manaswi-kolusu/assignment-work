import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router'
import Contact from './components/Contact'
import Home from './components/Home'
import Product from './components/Product'
import ProductList from './components/ProductList'
import RootLayout from './components/RootLayout'
import ErrorPage from './components/ErrorPage'
import NotFound from './components/NotFound'

function App() {
  const routeObj=createBrowserRouter([
    {
      path: "/",
      element:<RootLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          index: true,
          element:<Home/>
        },
        {
          path:"contact",
          element:<Contact/>
        },
        {
          path:"products",
          element:<ProductList/>
        },
        {
          path:"products/:id",
          element:<Product/>
        },
        {
          path: "*",
          element:<NotFound/>
        }
      ],
    },

  ])
  return <RouterProvider router={routeObj}/>
}

export default App
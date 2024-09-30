import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Contact from './routes/Contact.jsx'
// 2 - pagina de erro
import ErrorPage from './routes/ErrorPage.jsx'
// 3 - componente base
import Home from './routes/Home.jsx'
import './index.css'
// 7 - Rotas dinamicas 
import Product from './routes/Product.jsx'
// 8 - Next route
import Info from './routes/Info.jsx'
// 10 - Search 
import Search from './routes/Search.jsx'

// 1 - configurando router
import{
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    // 3 - compoente base
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path:"contact",
        element: <Contact/>
      },
      // 7 - rotas dinamicas
      {
        path: "products/:id",
        element: <Product/>
      },
      // 8 - next route
      {
        path:"products/:id/info",
        element:<Info/>
      },
      // 10 - Search 
      {
        path:"search",
        element: <Search/>
      },
      // 11 - redirect 
      {
        path: "teste",
        element: <Navigate to="/"/>
      }
    ]
  },
  // {
  //   path:"contact",
  //   element: <Contact/>
  // }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import Home from './routes/Home.jsx'
import Error from './routes/Error.jsx'
import Sobre from './routes/Sobre.jsx'
import Contato from './routes/Contato.jsx'
import Produtos from './routes/Produtos.jsx'
import Login from './routes/Login.jsx'
import GlobalStyle from './css/GlobalStyle.jsx'

const router = createBrowserRouter([
  {
    path: '/', element: <App/>,
    errorElement: <Error/>,

    children: [
      {path: '/', element: <Home/>},
      {path: '/produtos', element: <Produtos/>},
      {path: '/sobre', element: <Sobre/>},
      {path: '/contato', element: <Contato/>},
      {path: '/login', element: <Login/>},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle/>
    <RouterProvider router={router} />
  </StrictMode>,
)

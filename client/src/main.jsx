import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './components/Router/Router.jsx'
import { Provider } from 'react-redux'
import store from './components/store/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
    <RouterProvider router={Router}/>
    </Provider>
  </StrictMode>,
)

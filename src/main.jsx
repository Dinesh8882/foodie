import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import SidbarContextProvider from './context/SidbarContext.jsx'
import { Provider } from 'react-redux'
import store from './app/store.js'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <SidbarContextProvider>
        <Toaster position='bottom-right' toastOptions={{
          style: {
            background: "#f97316",
            color: "#ffffff",
          }
        }} />
        <App />
      </SidbarContextProvider>
    </BrowserRouter>
  </Provider>
)

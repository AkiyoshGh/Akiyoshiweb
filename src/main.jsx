import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import './index.css'
import './data/projects.js'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={{}}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)

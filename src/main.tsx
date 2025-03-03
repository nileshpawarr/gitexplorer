import { createRoot } from 'react-dom/client'
import "./i18n/index.ts"
import './scss/index.scss'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(<App />)

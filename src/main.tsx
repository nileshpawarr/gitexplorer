import { createRoot } from 'react-dom/client'
import './scss/index.scss'
import App from './App.tsx'
import "./i18n/index.ts"

createRoot(document.getElementById('root')!).render(<App />)

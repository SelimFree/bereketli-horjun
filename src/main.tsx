import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import './i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App companyName="Bereketli Horjun" country="Turkmenistan" languages={[{ code: "en", label: "English" }]}/>
  </StrictMode>,
)

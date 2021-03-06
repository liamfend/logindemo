import React from 'react'
import ReactDOM from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import { i18n, initI18n } from './i18nConfig'
import App from './App'
import './index.css'

initI18n()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
)

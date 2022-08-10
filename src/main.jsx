import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../css/main.css'
import './index.css'
import { RecoilRoot } from 'recoil'




ReactDOM.createRoot(document.getElementById('root')).render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
)

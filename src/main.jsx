import React from 'react'
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client'
import Card from './Card'
import App from './App'
import './Card.css'
import './main.css'
import CardList from './Cardlist'
import 'tachyons'
import { pokemon } from './pokemon'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)

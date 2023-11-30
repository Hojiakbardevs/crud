import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Crud from './Components/Crud'
import QuizApp from './Components/Quizapp'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Crud/> */}
    <QuizApp/>
  </React.StrictMode>,
)

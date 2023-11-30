import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Crud from './Components/Crud'
import QuizApp from './Components/Quizapp'
import Wheather from './Components/Wheather'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Crud/> */}
    <QuizApp/>
    <Wheather/>
  </React.StrictMode>,
)

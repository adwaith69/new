import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import State from './components/State'
import Count from './components/Count'
import Name from './components/Name'
import Api from './components/Api'
import Ccard from './components/Ccard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <br /> <h1>TATA ELXSI</h1>
      

      <Navbar />
      <Routes>
        <Route path="/log" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/state" element={<State />} />
        <Route path="/count" element={<Count />} />
        <Route path="/name" element={<Name />} />
        <Route path="/api" element={<Api />} />
        <Route path="/ccard" element={<Ccard />} />
        

      </Routes>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
// 3 - componente base
import { Outlet } from 'react-router-dom'
// 4 - Links entre paginas 
import Navbar from './components/Navbar'
// 10 - Search
import SearchForm from './components/SearchForm'

function App() {
  return (
    
      <div>
        <Navbar/>
        <SearchForm/>
        <Outlet/>
        <p>Footer</p>
      </div>
  )
}

export default App

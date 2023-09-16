import { useState } from 'react'
import './App.css'
import { Navbar } from './Component/Navbar'
import { Hero } from './Component/Hero'
import { HeadlineCard } from './Component/HeadlineCard'
import { Food } from './Component/Food'
import { Category } from './Component/Category'

function App() {

  return (
    <>
   <Navbar/>
   <Hero/>
   <HeadlineCard/>
   <Food/>
   <Category/>



    </>
  )
}

export default App

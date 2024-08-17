import React from 'react'
import "./Home.css"
import Hero from '../components/Hero'
import MessageForm from '../components/MessageForm'
import Biography from '../components/Biography'
import Department from '../components/Department'

function Home() {
  return (
    <div>
      <Hero/>
      <Biography/>
      <Department/>
      <MessageForm/>
      
    </div>
  )
}

export default Home

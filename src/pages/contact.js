import React from 'react'
import { useNavigate } from 'react-router-dom'


function Contact() {
  let navigate = useNavigate()
  return (
    <div>
      <h1>Contact</h1>
    <button onClick={() => {navigate('/starships')}}>Different Way to About</button>
    </div>
  )
}

export default Contact
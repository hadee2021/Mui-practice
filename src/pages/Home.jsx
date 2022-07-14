import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div><Link to='/ch01'>ch01</Link></div>
      <div><Link to='/ch02'>ch02</Link></div>
    </div>
  )
}

export default Home
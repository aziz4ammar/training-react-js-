import React from 'react'
import fan from "./vd/ann.mp4"
import "./about.css"
const About = () => {
  return (
    <div className='so'>
        <video className='fan' src={fan} controls></video>
    </div>
  )
}

export default About
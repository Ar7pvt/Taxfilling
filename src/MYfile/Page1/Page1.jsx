import React from 'react'
import './page1.css'
import vid1 from '../Asset/page1vid.mp4'

export default function Page1() {
  return (
    <div className='page' >
      <div className="overlay"></div>
      <video src={vid1} autoPlay loop muted />
      <div className='content'>
        <h1 className='h1Style'>Simplify Tax Filing</h1>
        <p className='pStyle'>Efficient and hassle-fee tax filing services in India.</p>
        <p>Save time and money with AR7</p>
        <button type="button" className="btn btn-light btn-outline-primary">Get Started</button>
      </div>
    </div>
  )
}

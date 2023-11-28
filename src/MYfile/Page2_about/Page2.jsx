// rfc
import React from 'react'
import Img2 from '../Asset/img2.jpg'
import './page2.css'

export default function Page2() {
  return (
    <div className='page2'>
      <div className="container2 grid2 grid-two-column">
        <div className="section-page2-data">
          <p className="page2-top-data">About AR7</p>
          <p className="page2-para">
            Welcome to AR7, your trusted tax filing website in Kolkata, WB.
            We are dedicated to simplifying the tax filing process for
            individuals and businesses, ensuring accuracy and compliance
            every step of the way. 
            <br></br>
            <br></br>

            With our user-friendly platform and expert team,
            we strive to provide a seamless experience, saving you time,
            money, and unnecessary stress. Trust AR7 to handle your tax
            matters efficiently and effectively, so you can focus on what 
            matters most to you.
          </p>
          <button type="button" className="btn btn-light btn-outline-primary">CONTACT</button>
          {/* <Button className="btn hireme-btn">
            <NavLink to="/contact"> hire me </NavLink>
          </Button> */}
        </div>

        {/* for image  */}
        <div className="section-page2-image">
          <picture>
            <img src={Img2} className="page2-img"/>
          </picture>
        </div>
      </div>
    </div>
  )
}

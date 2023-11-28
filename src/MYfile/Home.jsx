import React from 'react'
import Page1 from './Page1/Page1';
import Page2 from './Page2_about/Page2'
import Page3 from './Page3_Services/Page3';
import Page4 from './Page4_Expert/Page4';
import Page5 from './Page5_contact/Page5';


export default function Home() {
  return (
    <div>
        <Page1/>
        <Page2/>
        <Page3/>
        <Page4/>
        <Page5/>
    </div>
  )
}


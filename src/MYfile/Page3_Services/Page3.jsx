import React from 'react'
import './page3.css'

import img from '../Asset/images (1).jpg'
import img2 from '../Asset/images (2).jpg'
import img3 from '../Asset/images (3).jpg'

// creating an array
const Data = [
    {
        id: 1,
        imgSrc: img,
        desTitle: 'Individual Tax Filing',
        description: "We can help you file your individual income tax return accurately and efficiently. Let us handle the paperwork so you can focus on what matters most."
    },
    {
        id: 2,
        imgSrc: img2,
        desTitle: 'Business Tax Filing',
        description: "Our team of experienced professionals can assist with all aspects of business tax filing, from preparation to planning. Trust us to navigate the complex tax landscape so you don't have to."
    },
    {
        id: 3,
        imgSrc: img3,
        desTitle: 'Tax Consulting',
        description: "Looking for expert advice on tax matters? Look no further. Our consultants can provide personalized guidance on tax planning, compliance, and more, tailored to your unique needs."
    },

]
export default function Page3() {
    return (
        <div className='page3 gridr grid-two-row'>
            <div className="secTitle">
                <h3 className='title'>OUR SERVICES </h3>
            </div>

            <div className="secContent gridc grid-three-column">
                {
                    Data.map(({ id, imgSrc, desTitle, description }) => {
                        return (
                            <div key={id} className="singleDestination">

                                <div className="imageDiv">
                                    <img src={imgSrc} alt={desTitle} />
                                </div>

                                <div className="cardInfo">
                                    <h4 className='destTitle'>{desTitle}</h4>
                                </div>

                                <div className="desc">
                                    <p>{description}</p>
                                </div>

                                <center>
                                    <button type="button" className="btn btn-light btn-outline-primary">
                                        More Info
                                    </button>
                                </center>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )

}


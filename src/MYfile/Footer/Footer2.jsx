import React from 'react'
// import styled from "styled-components";
// import { Button } from "../styles/Button";
// import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

export default function footer2() {

    const contactShort = {
        maxWidth: '60vw',
        margin: 'auto',
        padding: '3rem 10rem',
        backgroundColor: '#556B2F', // Replace with your desired background color
        borderRadius: '1rem',
        boxShadow: '#B8860B', // Replace with your desired box shadow style
        transform: 'translateY(50%)',
    };

    const contactShortBtn = {
        justifySelf: 'end',
        alignSelf: 'center',
    };


    const footerStyle = {
        padding: '10rem 16px',
        backgroundColor: '#2F4F4F', // Replace with your desired background color
    };

    const h3Style = {
        color: '#ADD8E6', // Replace with your desired color
        marginBottom: '2.4rem',

    };
    const h4Style = {
        color: '#FFFFFF', // Replace with your desired color
        marginBottom: '1.0rem',
    };

    const pStyle = {
        color: '#DCDCDC', // Replace with your desired color
    };

    const iconsStyle = {
        display: 'flex',
        gap: '2rem',
    };

    const iconStyle = {
        color: '#008B8B', // Replace with your desired icon color
        fontSize: '2.4rem',
        position: 'relative',
        cursor: 'pointer',
    };

    const footerBottomStyle = {
        paddingTop: '9rem',
    };

    const hrStyle = {
        marginBottom: '2rem',
        color: '#4B0082', // Replace with your desired color
        height: '0.1px',
    };

    const contactShortStyle = {
        maxWidth: '95vw',
        padding: '2rem 0rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
    };

    const contactShortBtnStyle = {
        textAlign: 'center',
        justifySelf: 'flex-start',
    };
    return (
        <>
            <section className="" style={contactShort}>
                <div className="grid grid-two-column" style={iconsStyle}>
                    <div>
                        <h3 style={h4Style}>Ready to get started?</h3>
                        <h3 style={h4Style}>Talk to us today</h3>
                    </div>

                    <div className="" style={contactShortBtn}>
                        <button type="button" class="btn btn-light">Get Started</button>
                        {/* <NavLink to="/">
                            <Button>Get Started</Button>
                        </NavLink> */}
                    </div>
                </div>
            </section>
            <footer style={footerStyle}>
                <div className=" grid-four-column" style={iconsStyle}>
                    <div className="footer-about">
                        <h3 style={h3Style}>AR7sol</h3>
                        <p style={pStyle}>Sol of every finance problem</p>
                    </div>

                    {/* 2nd column */}
                    <div className="footer-subscribe" >
                        <h3 style={h3Style}>Subscribe to get important updates</h3>
                        <form action="#">
                            <input
                                type="email"
                                required
                                autoComplete="off"
                                placeholder="Email"
                            />
                            <input type="submit" value="Subscribe" />
                        </form>
                    </div>

                    {/* 3rs column  */}
                    <div className="footer-social" style={iconStyle}>
                        <h3 style={h3Style}>Follows Us</h3>
                        <div className="footer-social--icons">
                            <div>
                                <FaDiscord className="icons" />
                            </div>
                            <div>
                                <FaInstagram className="icons" />
                            </div>
                            <div>
                                <FaYoutube className="icons" />
                                {/* <a
                                    href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                                    target="_blank">
                                    <FaYoutube className="icons" />
                                </a> */}
                            </div>
                        </div>
                    </div>

                    {/* 4th column  */}
                    <div className="footer-contact" style={iconStyle}>
                        <h3 style={h3Style}>Call Us</h3>
                        <h3 style={h3Style}>+91 7979825251</h3>
                        <h3 style={h3Style}>+91 7979825252</h3>
                    </div>
                </div>
                <div className="footer-bottom--section" style={footerBottomStyle}>
                    <hr style={hrStyle} />
                    <div className="container grid grid-two-column" style={contactShortStyle}>
                        <p style={pStyle}>
                            @{new Date().getFullYear()} AR7sol. All Rights Reserved
                        </p>
                        <div style={contactShortBtnStyle} >
                            <p style={pStyle}>PRIVACY POLICY</p>
                            <p style={pStyle}>TERMS & CONDITIONS</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}


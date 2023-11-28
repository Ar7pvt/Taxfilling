import React from 'react'
import styled from 'styled-components'

const Page5 = () => {
    const Wrapper = styled.section`
       padding :6rem 0 3rem 0;

       .page5title{
        display:block;
        text-align: center;
        font-size: 2rem;
        margin:1rem 0;
        }

        .container {
            margin-top: 3rem;
            text-align: center;
      
            .contact-form {
              max-width: 40rem;
              margin: auto;
      
              .contact-inputs {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                
                input, textarea{
                    max-width: 50rem;
                    color: grey;
                    padding: 0.6rem 1.4rem;
                    border: 1px solid black;
                    text-transform: uppercase;
                   box-shadow: pink;
                }

                input[type="submit"] {
                    max-width: 16rem;
                    margin-top: 2rem;
                    background-color: dodgerblue;
                    color: white;
                    padding: 0.4rem 3.2rem;
                    border-style: solid;
                    border-width: .1rem;
                    text-transform: uppercase;
                    font-size: 1.8rem;
                    cursor: pointer;
                    transition: all 0.2s;
      
                  &:hover {
                    background-color: blue;
                    border: 1px solid ;
                    color: white;
                    transform: scale(0.9);
                  }
                }
              }
            }
          }
    `;


    return (
        <Wrapper>
            <h3 className='page5title'>Feel free to contact us</h3>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14736.281053276303!2d88.4306861!3d22.57647525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f970ae9a2e19b5%3A0x16c43b9069f4b159!2sTechno%20India%20University!5e0!3m2!1sen!2sin!4v1696331226838!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>

            <div className="container">
                <div className="contact-form">
                    <form
                        action="https://formspree.io/f/xoqoppaw"
                        method="POST"
                        className="contact-inputs">
                        <input
                            type="text"
                            name="username"
                            placeholder="username"
                            autoComplete="off"
                            required
                        />

                        <input
                            type="email"
                            name="Email"
                            placeholder="Email"
                            autoComplete="off"
                            required
                        />

                        <textarea
                            name="message"
                            cols="30"
                            rows="6"
                            autoComplete="off"
                            required></textarea>

                        <input type="submit" value="send" />
                    </form>
                </div>
            </div>
        </Wrapper>
    )
}

export default Page5

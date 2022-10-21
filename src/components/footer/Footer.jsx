import React from 'react'
import './footer.css'
import { BsFillTelephoneFill}from 'react-icons/bs'
import {IoLocationSharp} from 'react-icons/io5'
import {IoMdMail} from 'react-icons/io'
import {AiFillClockCircle} from 'react-icons/ai'
import styled from 'styled-components'


function Footer() {
  return (
    <>
    <Grid>

    <div className="box">
        <div className='icon'>
        <BsFillTelephoneFill  />
        </div>
        <div className="text">
        <h3>Phone Number</h3>
        <p> +123 456 789 </p>
        <p> +987 654 321 </p>
        </div>
    </div>

    <div className="box">
        <div className='icon'>
        <IoLocationSharp  />
        </div>
        <div className="text">
        <h3>Our Location</h3>
        <p> Zmaja od Bosne bb </p>
        </div>
    </div>

    <div className="box">
        <div className='icon'>
        <AiFillClockCircle  />
        </div>
        <div className="text">
        <h3>Opening Hours</h3>
        <p> 09:00 </p>
        <p> 21:00 </p>
        </div>
    </div>

    <div className="box">
        <div className='icon'>
        <IoMdMail  />
        </div>
        <div className="text">
        <h3>Our Email</h3>
        <p> example1@gmail.com </p>
        <p> example2@gmail.com </p>
        </div>
    </div>

    </Grid>

    <div className="credit">
        &copy; copyright @ 2022 by <span> Cape Ann Team In Zenica </span> | all rights reserved!
    </div>
    </>
  )
}

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
gap:1.5rem;
align-items: flex-start;
justify-content: center;
margin-top: 5rem;
`

export default Footer
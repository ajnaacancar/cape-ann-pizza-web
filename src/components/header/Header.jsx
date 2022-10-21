import React from 'react'
import {GiKnifeFork} from 'react-icons/gi'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import styled from 'styled-components'
import {CSSTransition} from 'react-transition-group'
import './header.css'


function Header() {
  return (
    <>
    <div className='header'>
      <div className="logo">
      <GiKnifeFork />
        <Logo to={"/"}> Pizza </Logo>
      </div>
        
        <div className='nav'>
          <Link to={"/addPizza"}>Add New Pizza </Link>
        </div>
    </div>
    </>
  )
}

export default Header

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2.5rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
  color: white;
  `

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  svg{
    font-size: 2.5rem;
    margin: 0.5rem;
  }
  color: white
`
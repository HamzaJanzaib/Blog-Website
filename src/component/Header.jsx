import React from 'react'
import logo from '../assets/images/logo.webp'
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import { FaSearch, FaBars } from 'react-icons/fa'
import { Button } from './Button/Button'

const MainBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1vw 5vw;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  @media (max-width: 768px) {
    padding: 2vh 2vw;
    width: 100%;
    position: relative;
  } 
  .menu{
    display: Block;
  }
    

`

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  &:hover {
    color: #7C4EE4;
  }
  &.active {
    color: #7C4EE4;
  }
`

const RightBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  transition: all 0.3s ease;
  &:hover {
    color: #7C4EE4;
  }
    @media only screen and (max-width: 768px) {
      display: none;
    }
`

const Header = (props) => {
  const { id } = props
  return (
    <MainBox>
      <Link to="/">
        <img src={logo} alt="logo" style={{ height: '40px', cursor: 'pointer' }} />
      </Link>
      <FaBars className='menu'
        size={24} 
        style={{  
          display: 'none',
          cursor: 'pointer',
          '@media only screen and (max-width: 768px)': {
            display: 'block'
          }
        }}
      />
      <RightBox style={
        {
          '@media (max-width: 768px)': {
            display: 'none'
          }
        }
      }>
        <StyledNavLink id={id} to="/">Home</StyledNavLink>
        <StyledNavLink id={id} to="/blog">Blog</StyledNavLink>
        <StyledNavLink id={id} to="/about">About</StyledNavLink>
        <FaSearch size={16} />
        <Button location="/contact" value="contact" />
      </RightBox>
    </MainBox>
  )
}

export default Header

import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



const StyledButton = styled(Link)`
  background-color: #7C4EE4;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #6a3cc4;
  }
`

const StyledOutlineButton = styled(Link)`
  background-color: transparent;
  color: #7C4EE4;
  padding: 8px 16px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 1rem;
  background-color: transparent;  
  font-weight: 500;
  border: 1px solid #7C4EE4;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #7C4EE4;
    color: white;
  }
`

export const Button = ({ location, value, onClick, type }) => {
  return (
    <StyledButton type={type} to={location} onClick={onClick}>
      {value} 
    </StyledButton>
  )
}

export const OutlineButton = ({ location, value, type, onClick  }) => {
  return (
    <StyledOutlineButton type={type} to={location} onClick={onClick}>
      {value} 
    </StyledOutlineButton>
  )
}

export default Button

export const LoginButton = ( { onClick, value, bg, img, border, color }) => {
  return (
    <LoginButtonContainer onClick={onClick} style={{ backgroundColor: bg, border: border, color: color }}>
      {img && <img src={img} alt="value" />}
      {value}
    </LoginButtonContainer>
  )
}

const LoginButtonContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 1rem;
  background-color: ${({ bg }) => bg || '#7C4EE4'};
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  img{
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`


import React from 'react'
import styled from 'styled-components'
import { Button } from '../Button/Button'
import vector from '../../assets/images/vector.webp'

const ErrorPage = () => {
  return (
    <ErrorContainer>
      <ErrorBox className="error-content">
        <div className="vector-1">
          <img src={vector} alt="vector" className='vector-1' />
        </div>
        <h1>404</h1>
        <h2>Sorry!</h2>
        <p>The link is broken, try to refresh or go to home</p>
        <Button location="/" value="Go To Home" />
      </ErrorBox>
    </ErrorContainer>
  )
}

export default ErrorPage

const ErrorContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: repeat;
  background-size: contain;

  
`
const ErrorBox = styled.div`
  width: 45%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 20px;
  position: relative;
  padding: 1vw;
  padding: 2rem;
  color: #fff;
  background-color: #7C4EE4;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    width: 90%;
    height: 50%;
  }
  
    h1 {
      font-size: 8rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    h2 {
      font-size: 2rem;
      font-weight: 500;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.2rem;
      margin-bottom: 1rem;
      text-align: center;
    }
    .vector-1 {
      width: 100%;
      height: 100%;
      position: absolute;
      top: -30%;
      left: 0;
    }
  }
`

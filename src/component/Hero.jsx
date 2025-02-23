import React from 'react'
import styled from 'styled-components'
import vector from '../assets/images/vector.webp'
import hero from '../assets/images/image placeholder.webp'
import { Button } from './Button/Button'

function Hero() {
  return (
    <HeroContainer>
      <div className="hero-container">
        <div className="image-1">
          <img src={vector} alt="vector" className='vector-1' />
        </div>
        <div className="hero-content">
          <h5>Featured Post</h5>
          <h1>How AI will <br />
            Change the Future</h1>
          <p>The future of AI will see home robots having enhanced intelligence, increased capabilities, and becoming more personal and possibly cute. For example, home robots will overcome navigation, direction</p>
          <Button location="/blog" value="Read More" />
        </div>
        <div className="hero-image">
          <img src={hero} alt="hero" className='hero-image' />
        </div>
      </div>
      <div className="image-2">
        <img src={vector} alt="vector" className='vector-2' />
      </div>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
  background-color: #7C4EE4;
  height: 70vh; 
  color: white;
  font-size: 2rem;
  position: relative;
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    height: 110vh;
  }

  .hero-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image-1 {
    width: 500px;
    height: 300px;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    top: 0%;
    left: 0%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image-2 {
    width: 500px;
    height: 300px;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    left: 90%;
    top: 92%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;    
  }

  .hero-content {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 5vw 8vw;
  }

  .hero-image {
    width: 50%;
    height: 100%;
    display: flex;
    padding: 0.3vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
  }

  h5 {
    font-size: 1rem;
    font-weight: 300;
    text-transform: uppercase;
    color: #fff;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 600;
    text-transform: uppercase;
    color: #fff;
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.8rem;
    font-weight: 300;
    text-transform: uppercase;
    color: #fff;
    margin-bottom: 4rem;
  }

  @media only screen and (max-width: 768px) {
    .hero-container {
      height: 100%;
      flex-direction: column;
    }

    .hero-content {
      width: 100%;
    }

    .hero-image {
      width: 100%;
      height: 100%;
      margin-bottom: 20px;
    }

    .image-1 {
      width: 100%;
      height: 100%;
    }

    .image-2 {
      width: 100%;
    }

    h1 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.8rem;
      margin-bottom: 1rem;
    }

    h5 {
      font-size: 0.8rem;
    }
  }

  @media only screen and (max-width: 480px) {
    .hero-container {
      height: 100%;
      flex-direction: column;
    }

    .hero-content {
      width: 100%;
      padding: 5vw 8vw;
    }

    .hero-image {
      width: 100%;
      height: 100%;
      margin-bottom: 20px;
    }

    .image-1 {
      width: 100%;
      height: 100%;
    }

    .image-2 {
      width: 100%;
    }

    h1 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.8rem;
      margin-bottom: 1rem;
    }

    h5 {
      font-size: 0.8rem;
    }
  }
`
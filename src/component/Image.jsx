import React from 'react'
import styled from 'styled-components'
import container from '../assets/images/container.webp'
import { OutlineButton } from './Button/Button'
const Image = () => {
  return (
    <ImageContainer>
      <div className="image">
        <img src={container} alt="container" />
        <div className="text">
          <h5>DEVELOPMENT <span>16 March 2023</span></h5>
          <h1>How to make a Game look more attractive with New <br /> VR & AI Technology</h1>
          <p>Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it's publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we're committed to making AI accessible to everyone.
          </p>
          <OutlineButton location="/blog" value="Read More" />
        </div>
      </div>

    </ImageContainer>
  )
}

export default Image

const ImageContainer = styled.div`
  width: 100%;
  height: 70vh;
  padding: 2vw 5vw;
  position: relative;
  margin-bottom: 2vw;
  @media (max-width: 768px) {
    display: none;
  }
  .image {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 10px;
    background-color: #ccc;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
      
      &:hover {
        transform: scale(1.05);
      }
    }
   .text{
   width: 50%;
   height: 55%;
   background-color: #fff;
   position: absolute;
   right: 5%;
    border-radius: 20px;
    bottom: 5%;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
   padding: 2vw;
   margin-bottom: -3vw;
   }
   .text h5{
    font-size: 0.8rem;
    font-weight: 600;
    color: #000;
    margin-bottom: 1rem;
   }
   .text h1{
    font-size: 1.5rem;
    font-weight: 600;
    color: #000;
    margin-bottom: 0.5rem;
   } 
     .text h5 span{
    font-size: 0.8rem;
    font-weight: 200;
    color: #333;
   }
   .text p{
    font-size: 0.8rem;
    font-weight: 400;
    color: #000;
    margin-bottom: 1.5rem;
   }

  }
`

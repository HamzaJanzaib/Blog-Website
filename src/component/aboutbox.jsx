import React from 'react'
import styled from 'styled-components'
import Outline from './Outline'


const Aboutbox = ({ number, title, description, color, textColor }) => {
  return (
    <Box style={{ backgroundColor: color || '#fff' }}>
      <h1 style={{ color: textColor || '#7c4ee4' }}>{number}</h1>
      <h4 style={{ color: textColor || '#7c4ee4' }}>{title}</h4>
      <p style={{ color: textColor || '#666' }}>{description}</p>
      <Outline path={number} value="Read More" />
    </Box>
  )
}

export default Aboutbox

const Box = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 1vw ;
  height: 280px;
  border-radius: 10px;
  width: 300px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  margin: 1vw;
  @media (max-width: 768px) {
    width: 80%;
    margin: 1vw auto;
    padding: 1rem;
    height: 260px;
  }
 
    h1{
        font-size: 3rem;
        font-weight: 600;
    }
    h4{
        font-size: 1.5rem;
        font-weight: 600;
    }
    p{
        font-size: 0.6rem;
        line-height: 1.5;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    @media (max-width: 768px) {
        h1{
            font-size: 2rem;
        }
        h4{
            font-size: 1.2rem;
        }
        p{
            font-size: 0.5rem;
        }
`
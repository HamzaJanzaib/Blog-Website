import React from 'react'
import styled from 'styled-components'


const PageHedline = (props) => {
const {location, title, description} = props
  return (
    <Pagebox>
        <h5>{location}</h5>
        <h1>{title}</h1>
        <p>{description}</p>
    </Pagebox>
  )
}

export default PageHedline

const Pagebox = styled.div`
    font-size: 2rem;
    font-weight: 600;
    color: #000;
    text-align: center;
    margin: 2rem 0;
    h5{
        font-size: 1.5rem;
        font-weight: 600;
        color: #666;
        text-align: center;
        margin-bottom: 2rem;
    }
    h1{
        font-size: 2rem;
        font-weight: 600;
        color: #000;
        text-align: center;
        margin-bottom: 0.5rem;
    }
    p{
        font-size: 0.8rem;
        font-weight: 600;
        color: #666;
        text-align: center;
        width: 45%;
        margin: 0 auto;
    }
    @media (max-width: 768px) {
        width: 90%;
        h1{
            font-size: 1.5rem;
        }
        p{
            font-size: 0.5rem;
            width: 80%;
            margin: 0 auto;
        }
    }
`


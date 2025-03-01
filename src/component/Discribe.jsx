import React from 'react'
import { Button } from './Button/Button'
import styled from 'styled-components'
const Discribe = (props) => {
    const {text, location, value} = props
  return (
    <DiscribeContainer>
        <span>{text}</span>
        <Button location={`/${location}`} value={value} />
    </DiscribeContainer>
  )
}

export default Discribe

const DiscribeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1vw 5vw;

    span{
        font-size: 1.5rem;
        font-weight: 600;
        color: #333;
        text-transform: capitalize;
    }
        @media only screen and (max-width: 768px){  
            padding: 1vw 2vw;
            padding-bottom: 2vh;
            span{
                font-size: 2vh;
            }
        }
`


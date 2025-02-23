import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Outline = (props) => {
    const { path, value } = props
    return (
        <OutlineContainer>
            <Link className='button' to={path}>{value}</Link>
        </OutlineContainer>
    )
}

export default Outline

const OutlineContainer = styled.div`
.button{
    text-decoration: none;
    color: #333;
    background-color: #fff;
    padding: 0.4rem 1rem;
    border: 1px solid #333;
    border-radius: 5px;
    font-size: 0.8rem;
    font-weight: 600;
    transition: all 0.3s ease;
    &:hover{
        background-color: #333;
        color: #fff;
    }
}
`
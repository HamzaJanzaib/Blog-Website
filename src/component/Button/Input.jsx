import React from 'react'
import styled from 'styled-components'

const Input = (props) => {
    const {name, type, placeholder, value, onChange , disabled} = props
  return (
    <InputBox>
        <label htmlFor={name}>{name}</label>
        <input type={type} placeholder={placeholder} value={value} onChange={onChange} disabled={disabled} />
    </InputBox>
  )
}

export default Input

const InputBox = styled.div`
    width: 100%;
    height: fit-conten;
    display: flex;
    flex-direction: column;
    gap: 10px;
    label{
        font-size: 1.3rem;
        font-weight: 400;
    }
    input{
        width: 100%;
        height: 40px;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 0 10px;
        outline : none;
    }
`
import React from 'react'
import styled from 'styled-components'

const Textarea = (props) => {
    const {name, placeholder , value, onChange , disabled , row} = props
  return (
    <TextareaBox>
        <label htmlFor={name}>{name}</label>
        <textarea name={name} placeholder={placeholder} value={value} onChange={onChange} disabled={disabled} rows={row} />
    </TextareaBox>
  )
}

export default Textarea

const TextareaBox = styled.div`
    width: 100%;
    height: fit-contant;
    display: flex;
    flex-direction: column;
    gap: 10px;
    label{
        font-size: 1.3rem;
        font-weight: 400;
    }
    textarea{
        width: 100%;
        height: 100%;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
    }
`

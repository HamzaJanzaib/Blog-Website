import React from 'react'
import styled from 'styled-components'

const text = (props) => {
    const {content} = props
  return (
    <div>
        <p>{content}</p>
    </div>
  )
}

export default text

const Text = styled.div`
    p{
        font-size: 1rem;
    }
`
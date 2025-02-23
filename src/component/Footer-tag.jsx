import React from 'react'
import styled from 'styled-components'
const Footertag = (props) => {
    const {value} = props
  return (
    <FooterTagBox>{value}</FooterTagBox>
  )
}

export default Footertag

const FooterTagBox = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: #6A3CC4;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 5px;
  font-size: 0.6rem;
  font-weight: 600;
`

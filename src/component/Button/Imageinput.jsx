import React from 'react'
import { MdOutlinePhotoCamera } from "react-icons/md";
import styled from 'styled-components'

const Imageinput = () => {
  return (
    <Container>
        <label htmlFor="file">
            <MdOutlinePhotoCamera />
        </label>
        <input  type="file" accept="image/*" id="file" />
    </Container>
  )
}

export default Imageinput

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 1px solid #333;
    padding: 10px;
    cursor: pointer;
    label{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        color: #333;
    }
    input{
        display: none;
    }
`
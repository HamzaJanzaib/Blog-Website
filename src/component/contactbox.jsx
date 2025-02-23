import React from 'react'
import styled from 'styled-components'

const ContactBox = (props) => {
    const {title, details, icon, } = props
  return (
    <Contact>
        <div className="icon-box">
            {icon}
        </div>
        <h1>{title}</h1>
        <p>{details}</p>
    </Contact>
  )
}

export default ContactBox

const Contact = styled.div`
    height: 100%;
    width: 300px;
    border-radius: 10px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    gap: 1rem;
    p{
        font-size: 1rem;
        font-weight: 300;
        color: #666;
    }
    h1{
        font-size: 1.5rem;
        font-weight: 600;
        color: #6A3CC4;
    }
    .icon-box{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3rem;
        height: 3rem;
        background-color: #6A3CC4;
        border-radius: 50%;
        color: #fff;
        font-size: 1rem;
    }

`

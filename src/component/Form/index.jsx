import React from 'react'
import Input from '../Button/Input'
import Textarea from '../Button/textarea'
import {Button} from '../Button/Button'
import styled from 'styled-components'
import Contactform from '../Services/Contactform'

const Form = () => {
  return (
    <FormBox>
        <form >
            <div className="top">
                <div className="left">
                    <Input name="Name" type="text" />
                    <Input name="phone" type="tel" />
                </div>
                <div className="right">
                    <Input name="Email" type="email" />
                    <Input name="Subject" type="text" />
                </div>
            </div>
            <div className="bottom">
                <Textarea name="Message" rows={6} />
            </div>
            <div className="button">
                <Button value="Send Message" onClick={Contactform} />
            </div>
        </form>
    </FormBox>
  )
}

export default Form

const FormBox = styled.div`
    width: 480px;
    min-height: 450px;
    margin: 2rem auto;
    background-color: #fff;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    display: flex;
    position: relative;
    z-index: 9;
    padding: 2vw;
    flex-direction: column;
    gap: 10px;
    form {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .top {
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 10px;
    }
    .left {
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .right {
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .bottom {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .bottom textarea {
        height: 100%;
    }
    .button {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    @media (max-width: 768px) {
        width: 100%;
        min-height: auto;
        padding: 15px;
    }
    @media (max-width: 480px) {
        width: 90%;
        padding: 10px;
        form {
            width: 100%;
        }
        .top {
            flex-direction: column;
        }
        .left, .right {
            width: 100%;
        }
    }
`
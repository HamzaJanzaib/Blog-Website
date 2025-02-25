import React from 'react'
import styled from 'styled-components'
import  Input  from '../Button/Input'
import { Link } from 'react-router-dom'
import { LoginButton } from '../Button/Button'
import google from '../../assets/images/Google.webp'
import facebook from '../../assets/images/Facebook.webp'
import {Signup } from '../Services/initializeApp'
import { useState } from 'react'

const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100%;
    background-color: #f5f5f5;
`
const LoginBox = styled.div`
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
    h1 {
        font-size: 1.6rem;
        font-weight: 600;
        text-transform: capitalize;
        width: fit-content;
        margin: 0 auto;
    }
    .header{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .header p{
        font-size: 0.8rem;
        font-weight: 400;
        text-transform: capitalize;
        width: fit-content;
        margin: 0 auto;
    }
    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .button {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
    }
    .or {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
        padding: 0 1rem;
        font-size: 1.2rem;
        gap: 1rem;
        font-weight: 600;
        text-transform: capitalize;
    }   
    .line {
        width: 30%;
        height: 2px;
        background-color: #000;
    }
    .actionbutton{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .signup{
        font-size: 0.8rem;
        font-weight: 400;
        text-transform: capitalize;
        width: fit-content;
        margin: 10px auto;
        a{
            color: #000;
            text-decoration: none;
            font-weight: 600;
        }
    }
    @media (max-width: 768px) {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 20% 10%;
        border-radius: 0;
        box-shadow: none;
        border-radius: 0;
        box-shadow: none;
    }
`
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [username, setUsername] = useState('')
  return (
    <LoginContainer>
        <LoginBox>
            <div className='header'>
                <h1>Create an Account</h1>
                <p>Connect with your friends today!</p>
            </div>
            <form>
                <Input type="text" placeholder="Enter Your Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <Input type="email" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input type="password" placeholder="Enter Your Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <Input type="password" placeholder="Enter Your Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <div className='button'>
                <LoginButton onClick={() => {Signup(email, password, username, phone)}} value="Sign Up" bg="#0E64D2" border="1px solid #0E64D2" color="#fff"/>
                </div>
                <div className='or'>
                    <div className='line'></div>
                    <span>Or With</span>
                    <div className='line'></div>
                </div>
                <div className='actionbutton'>
                    
                    <LoginButton onClick={() => { }} value="Sign Up with Facebook" img={facebook} bg="#0E64D2" border="1px solid #0E64D2" color="#fff" />
                    <LoginButton onClick={() => {}} value="Sign Up with Google" img={google} bg="#fff" border="1px solid #000" color="#000" />
                </div>
                <p className='signup'>Already have an account? <Link to="/login">Login</Link></p>
            </form>
        </LoginBox>
    </LoginContainer>
  )
}

export default Login


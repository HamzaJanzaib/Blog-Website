import React from 'react'
import logo from '../assets/images/logo.webp'
import vector from '../assets/images/vector.webp'
import { Link } from 'react-router-dom'
import Footertag from './Footer-tag'
import styled from 'styled-components'


const Footer = () => {
    return (
        <footer>
            <FooterTopBox>
                <div className="image-1">
                    <img src={vector} alt="vector" className='vector-1' />
                </div>
                <h1>Get our stories delivered From   <br />
                    us to your inbox weekly.
                </h1>
                <div className="message-box">
                    <input type="text" placeholder='Your Email...' />
                    <button>Get Started</button>
                </div>
                <p>Get a response tomorrow if you submit by 9pm today. If we received after
                    <br />
                    9pm will get a reponse the following day</p>
                <div className="image-2">
                    <img src={vector} alt="vector" className='vector-2' />
                </div>
            </FooterTopBox>
            <FooterBottomBox>
                <img id='logo' src={logo} alt="logo" />
                <div className="link-box">
                    <Link id='{id}' to="/" >Home</Link>
                    <Link id='{id}' to="/blog" >Blog</Link>
                    <Link id='{id}' to="/about" >About</Link>
                    <Link id='{id}' to="/contact" >Contact</Link>
                </div>
                <div className="tag-box">
                    <Footertag value="FB" />
                    <Footertag value="IG" />
                    <Footertag value="LG" />
                    <Footertag value="YT" />
                </div>
                <br />
                <hr />
                <p>Copyright Ideapeel Inc © 2025. All Right Reserved</p>
            </FooterBottomBox>
        </footer>
    )
}

export default Footer

const FooterTopBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1vw 5vw;
  background-color: #6A3CC4;
  border-top: 1px solid #eee;
  height: 400px;
  width: 100%;
  text-align: center;
  color: #fff;
  overflow: hidden;
  position: relative;
  .image-1{
    width: 500px;
    height: 300px;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    top: 0%;
    left: 0%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .image-2{
    width: 500px;
    height: 300px;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    left: 90%;
    top: 92%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;    
  }
  h1{
    font-size: 2.5vw;
    font-weight: 800;
    margin-bottom: 20px;
  }
  .message-box{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
  }
  .message-box input{
    width: 300px;
    height: 40px;
    border-radius: 10px;
    border: none;
    padding: 0 10px;
  }
  .message-box button{
    width: 100px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: transparent;
    padding: 0 10px;
    cursor: pointer;
    color: #fff;
    font-weight: 600;
    transition: all 0.3s ease;
    &:hover{
      background-color: #fff;
      color: #6A3CC4;
      border: 1px solid #333    ;
    }

  }
    @media only screen and (max-width: 768px) {
      height: 40vh;
      padding: 2vh 2vw;
      h1{
        font-size: 2rem;
      }
      

    }
      @media only screen and (max-width: 480px) {
        height: 40vh;
        padding: 1vh 1vw;
        h1{
          font-size: 1rem;
        }
          p{
            font-size: 0.5rem;
          }
        .message-box{
          flex-direction: column;
        }
        .message-box input{
          width: 100%;
        }
        .image-1{
        width: 300px;
        height: 100px;
              }
        .image-2{
        width: 300px;
        height: 100px;
        }
      }

`
const FooterBottomBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2vw 5vw;
  hr{
    width: 100%;
    height: 1px;
    background-color: #ccc;
    margin: 20px 0;
  }
  p{
    font-size: 1.3rem;
    font-weight: 300;
    color: #999;
  }
    .tag-box{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 10px 0;
    }
        .link-box{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
            padding: 10px 0;
        }
        .link-box a{
            font-size: 0.8rem;
            font-weight: 300;
            color: #333;
            text-decoration: none;
            transition: all 0.3s ease;
            &:hover{
                color: #6A3CC4;
            }
        }
        #logo{
            width: 120px;
            margin-bottom: 20px;
            overflow: hidden;
            display: flex;
        }
        @media only screen and (max-width: 768px) {
          #logo{
            width: 100px;
          }
          .link-box a{
            font-size: 1rem;
          }
            p{
              font-size: 0.8rem;
            }
            .tag-box{
              flex-wrap: wrap;
            }
        }

`

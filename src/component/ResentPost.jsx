import React from 'react'
import styled from 'styled-components'
import container from '../assets/images/container.webp'
import { OutlineButton } from './Button/Button'

const ResentPost = () => {
    return (
        <ResentPostContainer>
            <div className="box">
                <div className="left">
                    <img src={container} alt="container" />
                </div>
                <div className="right">
                    <div className="text">
                        <h5>DEVELOPMENT <span>16 March 2023</span></h5>
                        <h1>How to make a Game look more attractive with New VR & <br /> AI Technology</h1>
                        <p>Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it's publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we're committed to making AI accessible to everyone.
                        </p>
                        <OutlineButton location="blog" value="Read More" />
                    </div>

                </div>
            </div>
        </ResentPostContainer>
    )
}

export default ResentPost

const ResentPostContainer = styled.div`
    width: 100%;
    height: 60vh;
    margin-bottom: 2vw;

    .box{
        width: 100%;
        height: 100%;
        display: flex;
        padding: 2vw 5vw;
    }

    .left{
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .left img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }

    .right{
        width: 50%;
        height: 100%;
        padding: 3vw 5vw;
    }

    .right .text{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }

    .right .text h5{
        font-size: 1rem;
        font-weight: 600;
        color: #000;
        margin-bottom: 0.5rem;
    }

    .right .text h5 span{
        font-size: 1rem;
        font-weight: 200;
        color: #333;
    }

    .right .text h1{
        font-size: 1.5rem;
        font-weight: 600;
        color: #000;
        margin: 0.5rem 0;
    }

    .right .text p{
        font-size: 0.8rem;
        font-weight: 400;
        color: #000;
        margin-bottom: 2rem;
    }

    @media (max-width: 768px) {
        height: auto;
        
        .box {
            flex-direction: column;
            padding: 4vw;
        }

        .left {
            width: 100%;
            height: 300px;
            margin-bottom: 2vw;
        }

        .right {
            width: 100%;
            padding: 2vw;
        }
    }

    @media (max-width: 480px) {
        .box {
            padding: 3vw;
        }

        .left {
            height: 200px;
        }

        .right .text h1 {
            font-size: 1.2rem;
        }

        .right .text p {
            font-size: 0.7rem;
        }
    }
`
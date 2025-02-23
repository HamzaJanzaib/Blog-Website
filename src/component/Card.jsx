import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = (props) => {
  const { image, caterogorie, hadline, paragraph, buttonpath, date, key } = props
  return (
    <CardBox>
      <div className="image-box">
        <img src={image} alt={caterogorie} />
      </div>

      <h4>{caterogorie} - <span>{date}</span></h4>
      <h2>{hadline}</h2>
      <p>{paragraph}</p>
      <Link id={key} to={`/blog/${buttonpath}`}>Read More...</Link>
    </CardBox>
  )
}

export default Card

const CardBox = styled.div`
height: 400px;
width: 100%;
border-radius: 10px;
padding: 20px;

.image-box{
    width: 100%;
    background-color: #f0f0f0;
    border-radius: 10px;
    overflow: hidden;
    height: 60%;

    img{
        width: 100%;
        object-fit: cover;
        height: 100%;
    }

}
    h4{
        font-size: 0.8rem;
        font-weight: 600;
        text-transform: uppercase;
        margin-top: 10px;
        color: #333;
        margin-bottom: 10px;
    }
        h4 span{
            font-size: 0.8rem;
            font-weight: 400;
            color: #999;
        }
        h2{
            font-size: 1rem;
            font-weight: 600;
            text-transform: capitalize;
            line-height: 1rem;
            color: #333;
            margin-bottom: 10px;
        }
        p{
            font-size: 0.6rem;
            font-weight: 200;
            color: #666;
            margin-bottom: 10px;
        }
        a{
            font-size: 0.8rem;
            font-weight: 400;
            margin-bottom: 10px;
        }
        
    
`

import React from 'react'
import styled from 'styled-components'


const Blogmainimage = (props) => {
    const {image, height} = props
  return (
    <BlogmainimageContainer height={height}>
        <div className="blogmainimage">
            <img src={image} alt="blogmainimage" />
        </div>
    </BlogmainimageContainer>
  )
}

export default Blogmainimage

const BlogmainimageContainer = styled.div`
  width: 100%;
  height: ${props => props.height || '60vh'};
  overflow: hidden;
  .blogmainimage{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  img {
    width: 90%;
    border-radius: 10px;
    height: 90%;
    overflow: hidden;
    object-fit: cover;
    object-position: center;
  }
  @media (max-width: 768px) {
    height: 50vh;
  }
`

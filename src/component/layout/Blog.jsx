import React from 'react'
import PageHedline from '../PageHedline'
import styled from 'styled-components'
import Card from '../Card'
import Data from '../Services/Data'

const Blog = () => {
  const cardData = Data(0, 9)

  return (
    <div>
      <PageHedline location="OUR BLOGS" title="Find our all blogs from here" description="our blogs are written from very research research and well known writers writers so that  we can provide you the best blogs and articles articles for you to read them all along" />
      {/* Add your blog content here */}
      <Box>
        {
        cardData.length > 3 ? cardData.map((card , index) => (
          <Card 
            key={index}
            hadline={card.title}
            paragraph={card.description}
            buttonpath={card.id}
            date={card.data}
            caterogorie={card.caterogorie}
            image={card.image}
          />
        )) : cardData.map((card) => (
          <Card 
            key={index}
            hadline={card.title}
            paragraph={card.description}
            buttonpath={card.id}
            date={card.data}
            caterogorie={card.caterogorie}
            image={card.image}
          />
        ))}
      </Box>
    </div>
  )
}

export default Blog 

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 2vw 10vw;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 2vh 2vw;
  }

  @media only screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 2vh 2vw;
  }
`
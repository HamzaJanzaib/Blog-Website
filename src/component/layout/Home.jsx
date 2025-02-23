import React from 'react'
import styled from 'styled-components'
import Hero from '../Hero'
import Discribe from '../Discribe'
import Image from '../Image'
import ResentPost from '../ResentPost'
import Card from '../Card'
import Data from '../Services/Data'

const Home = () => {
  const cardData = Data(0, 9)

  return (
    <div>
      <Hero />
      <Image />
      <Discribe text="Our Recent Post" location="blog" value="View All" />
      <ResentPost />
      <Box>
        {
        cardData.length > 3 ? cardData.slice(0, 3).map((card , index) => (
          <Card 
            key={index}
            hadline={card.title}
            paragraph={card.description}
            buttonpath={card.id}
            date={card.data}
            caterogorie={card.caterogorie}
            image={card.image}
          />
        )) : cardData.map((card , index) => (
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
      <Discribe text="Popular Post" location="blog" value="View All" />
      <Box>
        {
        cardData.length > 3 ? cardData.slice(3, 9).map((card) => (
          <Card 
            key={card.id}
            hadline={card.title}
            paragraph={card.description}
            buttonpath={card.id}
            date={card.data}
            caterogorie={card.caterogorie}
            image={card.image}
          />
        )) : cardData.map((card) => (
          <Card 
            key={card.id}
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

export default Home

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

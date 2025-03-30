import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import Data from '../Services/Data'
import Blogmainimage from '../Blogmainimage'
import ErrorPage from './404'
import Text from '../text'
import Discribe from '../Discribe'
import Card from '../Card'
import { Comment } from '../Form/Comment';

const Singleblog = () => {
  
  const { id } = useParams()
  const cardData = Data(0, 9)
  const blog = cardData.find(blog => blog.id === parseInt(id))

  if (!blog) {
    return <ErrorPage />
  }

  return (
    <SingleblogContainer>
      <div className="singleblog">
        <div className="singleblog-content">
          <p className="category">{blog.caterogorie} <span>{blog.data}</span></p>
          <h1>{blog.title}</h1>
          <p className="description">{blog.description}</p>
        </div>

        <Blogmainimage image={blog.image} height="70vh" />
        <div className="singleblog-content">
          <Text content={blog.contant} />
          <br />
          <Text content={blog.contant} />
          <br />
          <Text content={blog.contant} />
          <br />
          <Blogmainimage image={blog.image} height="40vh" />
          <Text content={blog.contant} />
        </div>

        <Discribe text="Popular Post" location="blog" value="View All" />
        <Box>
          {cardData.length > 3 ? cardData.slice(6, 9).map((card, index) => (
            <Card
              key={index}
              hadline={card.title}
              paragraph={card.description}
              buttonpath={card.id}
              date={card.data}
              caterogorie={card.caterogorie}
              image={card.image}
            />
          )) : cardData.map((card, index) => (
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
      <Throw>
        <Comment/>
      </Throw>
    </SingleblogContainer>
  )
}

export default Singleblog

const SingleblogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .singleblog {
    width: 100%;
    padding: 2rem;

    &-content {
      padding: 1vw 10vw;

      h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
      }

      .category {
        color: #666;
        margin-bottom: 0.5rem;
      }

      .description {
        line-height: 1.6;
        margin-top: 1rem;
      }
    }
  }
`

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
const Throw = styled.div`
padding: 2vw 10vw;
height : 100%;
max-height : 100vh;
over-flow-y : auto;
width: 100vw;
`
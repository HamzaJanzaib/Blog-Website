import React from 'react'
import PageHedline from '../PageHedline'
import Aboutbox from '../aboutbox'
import styled from 'styled-components'
import Blogmainimage from '../Blogmainimage'
import about from '../../assets/images/about.webp'



const About = () => {
  const aboutData = [
    {
      number: '01',
      title: 'Brainstorming',
      description: 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated.',
      color: '#7c4ee4',
      textColor: '#fff'
    },
    {
      number: '02',
      title: 'Analysing',
      description: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line solely on the bottom line.',
      textColor: '#666'
    },
    {
      number: '03',
      title: 'News Publishing',
      description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
      textColor: '#666'
    }
  ]
  return (
    <AboutContainer>
      <PageHedline location="ABOUT US" title="Creative Blog Writting and publishing site" description="Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment." />
        <Blogmainimage image={about} height="90vh" />    
      <Box>
        {aboutData.map((item) => (
          <Aboutbox key={item.number} {...item} />
        ))}
      </Box>
    </AboutContainer>
  )
}

export default About 

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Box = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    gap: 1vw;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`
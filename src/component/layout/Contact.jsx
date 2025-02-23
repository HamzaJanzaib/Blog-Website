import React from 'react'
import styled from 'styled-components'
import Form from '../Form/index'
import PageHedline from '../PageHedline'
import ContactInfo from '../contactbox'
import { FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa'
import ContactImage from '../../assets/images/contact.webp'

const Contact = () => {
  return (
    <ContactBox>
      <PageHedline  title="Get in Touch" description="Contact us to publish your content and show ads to our website and get a good reach." />
      <ContactInfoContainer>
      <ContactInfo title="Phone" details="1234567890" icon={<FaPhone />} />
      <ContactInfo title="Email" details="info@example.com" icon={<FaEnvelope />} />
      <ContactInfo title="Address" details="123 Main St, Anytown, USA" icon={<FaMapMarker />} />
      </ContactInfoContainer>
      <div className="image">
      <img src={ContactImage} alt="Contact" />
        </div>
        <div className="form">
      <Form />
        </div>
    </ContactBox>
  )
}

export default Contact 

const ContactBox = styled.div`
 .image{
        width: 100%;
        height: 60vh;
        object-fit: contain;
        overflow: hidden;
        z-index: 1;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .form{
        object-fit: contain;
        overflow: hidden;
        margin-top: -10%;
        z-index: 9;
        
    }
`
const ContactInfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1vw 10vw;
    gap: 1rem;
    margin-bottom: 2rem;
    @media (max-width: 768px) {
        flex-direction: column;
    }
    
    
`
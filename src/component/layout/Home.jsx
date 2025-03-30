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


// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import Hero from '../Hero';
// import Discribe from '../Discribe';
// import Image from '../Image';
// import ResentPost from '../ResentPost';
// import Card from '../Card';
// import { db } from '../Services/initializeApp'; // Import Firestore instance
// import { collection, getDocs } from 'firebase/firestore';

// const Home = () => {
//   const [cardData, setCardData] = useState([]); // State to store blog data
//   const [loading, setLoading] = useState(true); // State to handle loading

//   // Fetch data from Firestore
//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const blogsCollection = collection(db, 'blogs'); // Reference to the 'blogs' collection
//         const querySnapshot = await getDocs(blogsCollection); // Fetch all documents

//         const blogs = [];
//         querySnapshot.forEach((doc) => {
//           blogs.push({ id: doc.id, ...doc.data() }); // Add document ID and data to the array
//         });

//         setCardData(blogs); // Update state with fetched data
//         setLoading(false); // Set loading to false
//       } catch (error) {
//         console.error('Error fetching blogs: ', error);
//         setLoading(false); // Set loading to false even if there's an error
//       }
//     };

//     fetchBlogs(); // Call the fetch function
//   }, []);

//   if (loading) {
//     return <div>Loading blogs...</div>; // Show loading message
//   }

//   return (
//     <main>
//       <Hero />
//       <Image />
//       <Discribe text="Our Recent Post" location="blog" value="View All" />
//       <ResentPost />
//       <Box>
//         {cardData.slice(0, 3).map((card) => (
//           <Card
//             key={card.id} // Use document ID as the key
//             hadline={card.title}
//             paragraph={card.description}
//             buttonpath={card.id}
//             date={card.data}
//             caterogorie={card.caterogorie}
//             image={card.image}
//           />
//         ))}
//       </Box>
//       <Discribe text="Popular Post" location="blog" value="View All" />
//       <Box>
//         {cardData.slice(3).map((card) => (
//           <Card
//             key={card.id} // Use document ID as the key
//             hadline={card.title}
//             paragraph={card.description}
//             buttonpath={card.id}
//             date={card.data}
//             caterogorie={card.caterogorie}
//             image={card.image}
//           />
//         ))}
//       </Box>
//     </main>
//   );
// };

// export default Home;

// const Box = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 20px;
//   padding: 2vw 10vw;

//   @media (max-width: 768px) {
//     grid-template-columns: repeat(2, 1fr);
//     padding: 2vh 2vw;
//   }

//   @media only screen and (max-width: 480px) {
//     grid-template-columns: repeat(1, 1fr);
//     padding: 2vh 2vw;
//   }
// `;
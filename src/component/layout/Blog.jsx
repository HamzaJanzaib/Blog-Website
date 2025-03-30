
import React, { useEffect, useState } from 'react';
import PageHedline from '../PageHedline';
import styled from 'styled-components';
import Card from '../Card';
import Data from '../Services/Data';
import { db } from '../Services/initializeApp';
import { collection, getDocs } from 'firebase/firestore';

const Blog = () => {
  const [BlogData, setBlogs] = useState([]); // State to store all blogs
  const cardData = Data(0, 9); // Static card data (if needed)
   const [postIndex, setPostIndex] = useState(null); // State to store the index of the selected post

  // Fetch all blogs from Firebase
  useEffect(() => {
    const fetchBlogs = async () => {
      const blogsRef = collection(db, 'blog'); // Reference to the 'blog' collection
      const querySnapshot = await getDocs(blogsRef); // Fetch all documents
      const blogs = [];
      querySnapshot.forEach((doc) => {
        blogs.push({ id: doc.id, ...doc.data() }); // Add each blog to the array
      });
      setBlogs(blogs); // Update the state with all blogs
    };

    fetchBlogs(); // Call the function to fetch blogs
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      <PageHedline
        location="OUR BLOGS"
        title="Find all our blogs here"
        description="Our blogs are written after thorough research by well-known writers, providing you with the best content to read and enjoy."
      />

      {/* Render the fetched blogs */}
      <Box>
        {BlogData.map((blog , index) => (
           <Card
           key={blog.id}
           hadline={blog.Title}
           paragraph={blog.Description}
           buttonpath={blog.id}
           date={blog.postTime}
           caterogorie={blog.Category}
           image={blog.image}
           onClick={() => setPostIndex(index)} // Set the post index on click
           isActive={index === postIndex} // Highlight the selected post
         />
        ))}
      </Box>

      {/* Render the static card data (if needed) */}
      <Box>
        {cardData.map((card, index) => (
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
  );
};

export default Blog;

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 1vw 10vw;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 2vh 2vw;
  }

  @media only screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 2vh 2vw;
  }
`;
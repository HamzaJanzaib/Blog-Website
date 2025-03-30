
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import face from '../../assets/images/face.webp';
import { OutlineButton, Button } from '../../component/Button/Button';
import { MdLocalPhone, MdLocationPin, MdClose } from 'react-icons/md';
import { GrContactInfo } from 'react-icons/gr';
import { Logout } from '../Services/initializeApp';
import { db } from '../Services/initializeApp';
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { auth } from '../Services/initializeApp';
import { Upload } from '../Form/UploadBlog';
import Card from '../Card';

const Profile = () => {
  const [modal, setModal] = useState(false); // State to control modal visibility
  const [userDetail, setUserDetail] = useState(null); // State to store user details
  const [userBlogs, setUserBlogs] = useState([]); // State to store user blogs
  const [postIndex, setPostIndex] = useState(null); // State to store the index of the selected post

  // Logout function
  const logout = () => {
    Logout();
  };

  // Fetch user details from Firestore
  const fetchUserDetail = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, 'users', user.uid);
          const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetail(docSnap.data()); // Set user details if document exists
          fetchUserBlogs(user.uid); // Fetch blogs for the logged-in user
        } else {
          console.log('No such document!');
        }
      }
    });
  };

  // Fetch blogs for the logged-in user
  const fetchUserBlogs = async (userId) => {
    const blogsRef = collection(db, 'blog');
    const q = query(blogsRef, where('userId', '==', userId)); // Query blogs by userId
    const querySnapshot = await getDocs(q);
    const blogs = [];
    querySnapshot.forEach((doc) => {
      blogs.push({ id: doc.id, ...doc.data() });
    });
    setUserBlogs(blogs); // Set user blogs
  };

  // Fetch user details and blogs on component mount
  useEffect(() => {
    fetchUserDetail();
  }, []); // Re-run effect if user is logged in or out

  // Set the post index when userBlogs changes
  useEffect(() => {
    if (userBlogs.length > 0) {
      setPostIndex(0); // Set the default post index to 0 (first post)
    }
  }, [userBlogs]); // Run this effect whenever userBlogs changes

  // Function to handle modal open/close
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {userDetail ? (
        <Container>
          <Left>
            <Top>
              <img src={face} alt="profile" />
              <h1>{userDetail?.username}</h1>
              <h3>{userDetail?.email}</h3>
            </Top>
            <Bottom>
              <div className="profile-info">
                <h1>
                  <span>
                    <MdLocalPhone />
                  </span>
                  {userDetail?.phone}
                </h1>
                <h1>
                  <span>
                    <MdLocationPin />
                  </span>
                  Pakistan
                </h1>
                <br />
                <h1>
                  <span>
                    <GrContactInfo />
                  </span>
                  Bio
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Quisquam, quos.
                </p>
              </div>
              <div className="action">
                <Button onClick={() => console.log('Edit Profile')} value="Edit Profile" />
                <Button onClick={logout} value="Logout" />
              </div>
            </Bottom>
          </Left>
          <Right>
            <header>
              <h1>Your Posts</h1>
              <OutlineButton onClick={toggleModal} value="Create Post" />
            </header>
            <PostBox>
              {userBlogs.length > 0 ? (
                <Box>
                  {userBlogs.map((blog, index) => (
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
              ) : (
                <p>No posts found. Create your first post!</p>
              )}
            </PostBox>
          </Right>
        </Container>
      ) : (
        <NotFound>
          <img
            src="https://cdn.dribbble.com/userupload/22195611/file/original-967511bc1ecf749e666aaf23cb6f2cf2.gif"
            alt="loading"
          />
          <h1>Loading...</h1>
        </NotFound>
      )}

      {/* Modal for creating a post */}
      {modal && (
        <Modal>
          <ModalContent>
            <CloseButton onClick={toggleModal}>
              <MdClose size={24} />
            </CloseButton>
            <Upload onClose={toggleModal} />
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default Profile;

// Styled Components
const Container = styled.div`
  display: flex;
  padding: 20px;
  height: 100vh;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
  }
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 30%;
  margin-right: 20px;
  border-radius: 10px;
  border: 1px solid #333;
  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    min-height: 50vh;
    max-height: 100vh;
  }
`;

const Right = styled.div`
  width: 70%;
  border-radius: 10px;
  border: 1px solid #333;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    height: 60px;
    border-bottom: 1px solid #333;
    h1 {
      font-size: 20px;
      text-align: center;
      text-transform: uppercase;
      font-weight: 600;
      color: #333;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
    min-height: 50vh;
    max-height: 100vh;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 50%;
  width: 100%;
  border-bottom: 1px solid #333;
  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-bottom: 10px;
    @media (max-width: 768px) {
      width: 80px;
      height: 80px;
    }
  }
  h1 {
    font-size: 20px;
    font-weight: 600;
    color: #333;
  }
  h3 {
    font-size: 15px;
    color: #666;
  }
  @media (max-width: 768px) {
    height: 50%;
    width: 100%;
    padding: 10px;
  }
`;

const Bottom = styled.div`
  height: 50%;
  width: 100%;
  .profile-info {
    display: flex;
    flex-direction: column;
    padding: 20px;
    height: 80%;
    border-bottom: 1px solid #333;
    h1 {
      font-size: 20px;
      font-weight: 600;
      color: #333;
      text-transform: capitalize;
    }
    span {
      margin-right: 10px;
    }
    p {
      font-size: 15px;
      color: #666;
    }
  }
  .action {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  padding: 20px;
  border-radius: 10px;
  width: 500px;
  max-width: 90%;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  color: #333;
  &:hover {
    color: #000;
  }
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 2vh 2vw;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 2vh 2vw;
  }

  @media only screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 2vh 2vw;
  }
`;

const NotFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: #f7f7f7;
  img {
    width: 100px;
    height: 100px;
  }
`;

const PostBox = styled.div`
  overflow-y: auto; /* Enable vertical scrolling */
  padding: 2vh 2vw;
  height: 80%;
  width: 100%;
`;
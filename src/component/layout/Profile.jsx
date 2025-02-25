import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import face from '../../assets/images/face.webp'
import { OutlineButton, Button } from '../../component/Button/Button'
import { MdLocalPhone, MdLocationPin } from "react-icons/md";
import { GrContactInfo } from "react-icons/gr";
import { Logout } from '../Services/initializeApp'
import { db } from '../Services/initializeApp'
import { doc, getDoc } from 'firebase/firestore'
import { auth } from '../Services/initializeApp'
const Profile = () => {
  const logout = () => {
    Logout()
  }
 


  const [userdertail, setUserdertail] = useState(null)

  const fetchUserdertail = async () => {
    auth.onAuthStateChanged(async (user) => {

      const docRef = doc(db, 'users', user && user.uid)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        setUserdertail(docSnap.data())
      } else {
        console.log('No such document!')
      }
    })
  }
  useEffect(() => {
    fetchUserdertail()
  }, [])
  return (
    <>
    {
      userdertail ? (
        <Container>
          <Left>
            <Top>
          <img src={face} alt="profile" />
          <h1>{userdertail?.username}</h1>
          <h3>{userdertail?.email}</h3>
        </Top>
        <Bottom>
          <div className="profile-info">
            <h1> <span><MdLocalPhone />
            </span>{userdertail?.phone}</h1>
            <h1><span><MdLocationPin />
            </span>Pakistan</h1>
            <br />
            <h1> <span><GrContactInfo />
            </span>bio</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          </div>
          <div className="action">
            <Button onClick={() => editProfile()} value="edit profile" />
            <Button onClick={logout} value="logout" />
          </div>
        </Bottom>
      </Left>
      <Right>
        <header>
          <h1>your posts</h1>
          <OutlineButton location="/create" value="create post" />
        </header>
      </Right>

        </Container>
      ) : (
        <NotFound>
         <img src="https://cdn.dribbble.com/userupload/22195611/file/original-967511bc1ecf749e666aaf23cb6f2cf2.gif" alt="loading" />
         <h1>loading...</h1>
        </NotFound>
      )
    }
    </>
  )
}

export default Profile

const Container = styled.div`
  display: flex;
  padding: 20px;
  height: 100vh;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
  }
  
`

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
`

const Right = styled.div`
width: 70%;
border-radius: 10px;
border: 1px solid #333;
padding: 20px;
header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 60px;
  border-bottom: 1px solid #333;
  h1{
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
`


const Top = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 50%;
width: 100%;
border-bottom: 1px solid #333 ; 
img{
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
}
h1{
  font-size: 20px;
  font-weight: 600;
  color: #333;
}
h3{
  font-size: 15px;
  color: #666;
}
@media (max-width: 768px) {
  height: 50%;
  width: 100%;
    padding: 10px;
}
`

const Bottom = styled.div`
height: 50%;
width: 100%;
.profile-info{
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 80%;
  border-bottom: 1px solid #333;
  h1{
    font-size: 20px;
    font-weight: 600;
    color: #333;
    text-transform: capitalize;
  }
  span{
    margin-right: 10px;
  }
  p{
    font-size: 15px;
    color: #666;
  }
}
.action{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
}
`
const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.34);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`
const NotFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: #F7F7F7;
  img{
    width: 100px;
    height: 100px;
  }

`


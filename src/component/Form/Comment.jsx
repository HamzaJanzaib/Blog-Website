import React from 'react'
import styled from 'styled-components'
import Input from "./../Button/Input"
import Textarea from "./../Button/textarea"
import Button from '../Button/Button'




export const Comment = (props) => {
    return (
        <Commentbox>
            <form>
                <h1>Send Your FeedBack ❤</h1>
                <br />
                <Input name="Email" placeholder="enter your email..." />
                <br />
                <Textarea name="Message" placeholder="Message>>" />
                <br />
                <div className="button">

                    <Button value="submit" onClick={() => {

                    }} />
                </div>
            </form>
        </Commentbox>
    )
}

const Commentbox = styled.div`
height : 100%;
width : 100%;
display : flex;
color: #ccc;
flex-direction : row;
form{
width: 40%;
border-radius
box-shadow: 0 0 10px black ;
margin : auto;
padding: 2rem;
h1{
    width: fit-content;
    margin : auto;
    color:#111;
    font-size: 1.5rem;
}
}
.button{
    display: flex;
    width: fit-content;
    margin: auto;

}
`
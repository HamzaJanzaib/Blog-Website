import React from 'react'


const Avatar = (props) => {
    const {img , size} = props
    return (
        <div style={{width:size,height:size,borderRadius:size/2,overflow:'hidden'}} >
            <img src={img} style={{width:size,height:size}}/>
        </div>
       
    )
}

export default Avatar


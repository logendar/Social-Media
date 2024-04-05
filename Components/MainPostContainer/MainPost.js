import React from 'react'
import "./MainPost.css";
import CoverImage from '../Images/cherry.png';
import Contentpost from '../ContentPostConatiner/Contentpost';
import Post from '../PostConatiner/post';
export default function MainPost() {
  return (
    <div className='MainPostContainer'>
      <div>
        <img src={`${CoverImage}`} className='Coverimg' alt='' />
        <h2 style={{marginTop:-36 , color:'white' , textAlign:'start' , marginLeft:'34px'}}>Your Profile</h2>
      </div>
      <Contentpost />
      < Post />
      < Post />
      
      
    </div>
  )
}

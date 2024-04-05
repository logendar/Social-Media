import React from 'react'
import "./Contentpost.css";
import imageIcon from '../Images/gallery.png';
import emojiIcon from '../Images/cat-face.png';
import videoIcon from '../Images/video.png';
import profileimage from '../Images/Profile.png';


export default function Contentpost() {
  return (
    <div>
      <div className='ContentUpload'>
        <div style={{ display: 'flex', alignItems: 'center', padding: 10 }}>
          <img src={`${profileimage}`} className='profileimg' alt='' />
          <input type='text' className='contentwriting' placeholder='Write Whatever You Want !....' />
        </div>
        <div style={{ display: 'flex', marginLeft: '10px' }}>
          <div>
            <img src={`${imageIcon}`} className='icons' alt='' />
            <img src={`${emojiIcon}`} className='icons' alt='' />
            <img src={`${videoIcon}`} className='icons' alt='' />
            <button style={{marginLeft:"350px",paddingLeft:'20px' , paddingRight:'20px',paddingTop:6,paddingBottom:6 , border:'none' , backgroundColor:'black',color:'white',borderRadius:'6px', cursor:'pointer'}}>Post</button>
          </div>

        </div>

      </div>


    </div>
  )
}

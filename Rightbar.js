import React from 'react'
import './Rightbar.css';
import cherry from "../Images/cherry.png";
import image1 from "../Images/image3.jpg";
import image2 from "../Images/image2.jpg";
import image5 from "../Images/image5.jpg";
import addfriends from "../Images/add-user.png"
export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className='rightcontainer'>
        <h3>Friend Request</h3>
        <div>
          <div>
                <div style={{display:'flex' , alignItems:'center' , marginLeft:10 , cursor:"pointer" }}>
                <img src={`${image2}`} className='Friendimg' alt='' />
                <p style={{textAlign:'start' , marginLeft:'10px'}}> Robin Requested to follow you</p>
          </div>
          <div style={{display:'flex',justifyContent:'space-around'}}>
            <button style={{paddingLeft:'30px' , paddingRight:'30px' , paddingTop:5,paddingBottom:5,border:'none',backgroundColor:'black',color:'white',borderRadius:'10px'}}>Accept</button>
            <button style={{paddingLeft:'30px' , paddingRight:'30px' , paddingTop:5,paddingBottom:5,border:'none',backgroundColor:'black',color:'white',borderRadius:'10px'}} >Deny</button>
          </div>

          </div>
        
          

        </div>
        
          
       

      </div>

      <div className='rightcontainer2'>
        <h3 style={{textAlign:'start',marginLeft:'10px'}}>Suggested For You</h3>
        <div style={{marginTop:'10px'}}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center' }} >
              < img src={`${image2}`} className='ProfileImage' alt='' />
              <div>
                <p style={{ marginLeft: '10px',textAlign:'start' }}>Peter Parker</p>
                <p style={{ marginLeft: '10px',textAlign:'start' , marginTop:'-16px',fontSize:'11px',color:'#aaa'}}>Suggested for you </p>
              </div>

            </div>
            <div style={{ backgroundColor: '#aaa', padding: '10px', marginLeft: 12, borderRadius: '50%' }}>
              <img src={`${addfriends}`} className='addfriend' alt='' />
            </div>

          </div>
        </div>
        
        <div style={{marginTop:'10px'}}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center' }} >
              < img src={`${image1}`} className='ProfileImage' alt='' />
              <div>
                <p style={{ marginLeft: '10px',textAlign:'start' }}>Pinky</p>
                <p style={{ marginLeft: '10px',textAlign:'start' , marginTop:'-16px',fontSize:'11px',color:'#aaa'}}>Followed by You </p>
              </div>

            </div>
            <div style={{ backgroundColor: '#aaa', padding: '10px', marginLeft: 12, borderRadius: '50%' }}>
              <img src={`${addfriends}`} className='addfriend' alt='' />
            </div>

          </div>
        </div>

        <div style={{marginTop:'10px'}}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center' }} >
              < img src={`${image5}`} className='ProfileImage' alt='' />
              <div>
                <p style={{ marginLeft: '10px',textAlign:'start' }}>Leo</p>
                <p style={{ marginLeft: '10px',textAlign:'start' , marginTop:'-16px',fontSize:'11px',color:'#aaa'}}>Followed by You </p>
              </div>

            </div>
            <div style={{ backgroundColor: '#aaa', padding: '10px', marginLeft: 12, borderRadius: '50%' }}>
              <img src={`${addfriends}`} className='addfriend' alt='' />
            </div>

          </div>
        </div>

        
      </div>




    </div>
  )
}

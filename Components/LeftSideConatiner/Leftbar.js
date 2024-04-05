import React from 'react';
import "./Leftbar.css";
import image from "../Images/Profile.png";
import image1 from "../Images/image1.jpg";
import image2 from "../Images/image2.jpg";
import image3 from "../Images/image3.jpg";
import image4 from "../Images/image4.jpg";
import image5 from "../Images/image5.jpg";
import image6 from "../Images/image6.jpg";



export default function Leftbar() {
    return (
        <div className='Leftbar'>
            
            <div className='NotificationConatiner'>
                <img src={`${image}`} className='ProfilePageImageCover' alt='' />
                <div style={{display:'flex',alignItems:'center' , marginTop:'-30px'}}>
                    <img src={`${image2}`} className='ProfilePageImage' alt='' />
                    <div>
                    <p style={{marginLeft:6,marginTop:20 , color:'white' , textAlign:'start'}}>Steve</p>
                    <p style={{marginLeft:6,marginTop:20 , color:'white', textAlign:'start' ,marginTop:-16,fontSize:11}}>Well , Nothing Here !.</p>
                    </div>
                    
                </div> 
                <div style={{display:'flex' , justifyContent:'space-between'}}>
                    <p style={{color:'black',marginLeft:20,fontSize:'14px'}}>Profile Views</p>
                    <p style={{color:'black',marginLeft:20,fontSize:'12px',marginTop:12}}>1000</p>

                </div>
                
                <div style={{display:'flex' , justifyContent:'space-between'}}>
                    <p style={{color:'black',marginLeft:20,fontSize:'14px'}}>Friends</p>
                    <p style={{color:'black',marginLeft:20,fontSize:'12px',marginTop:12}}>100</p>

                </div>
                 
                <div style={{marginTop:10}}>
                    <p style={{color:'black',marginLeft:10,fontSize:'14px' ,marginRight:30,textAlign:'start' }}>User Bio</p>
                    <p style={{color:'black ',marginRight:8,fontSize:'12px',marginTop:12,textAlign:'start',marginLeft:'20px'}}>Aish Shibal !!!!!!!!!!!!!!!!........</p>

                </div>
                <button style={{width:'100%',paddingTop:4,paddingBottom:7,border:'none',backgroundColor:'green',color:'white'}}>Edit Profile</button>
            
                
                
            </div>

            <div className='NotificationConatiner'>
                <h3>Your Friends</h3>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <p style={{marginLeft:10}}>Friends</p>
                    <p style={{marginRight:10,color:'#aaa'}}>See All</p>
                </div>
                <div style={{display:'flex' , flexWrap:'wrap' ,marginLeft:5}}>
                    <div style={{marginLeft:4}}>
                        <img src={`${image4}`} className='FriendImage' alt='' />
                        <p style={{marginTop:-2}}> Robin</p>
                    </div>
                    <div>
                        <img src={`${image2}`} className='FriendImage' alt='' />
                        <p style={{marginTop:-2}}> Nancy</p>
                    </div>

                    <div>
                        <img src={`${image3}`} className='FriendImage' alt='' />
                        <p style={{marginTop:-2}}> Martha</p>
                    </div>
                    <div>
                        <img src={`${image1}`} className='FriendImage' alt='' />
                        <p style={{marginTop:-2}}> Martha</p>
                    </div>
                    <div>
                        <img src={`${image6}`} className='FriendImage' alt='' />
                        <p style={{marginTop:-2}}> Martha</p>
                    </div>
                    <div>
                        <img src={`${image5}`} className='FriendImage' alt='' />
                        <p style={{marginTop:-2}}> Martha</p>
                    </div>
                   
                   
                </div>
                
                   
                
            </div>



        </div>
    )
}

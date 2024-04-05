import React from 'react' ;
import "./NavBar.css" ;
import searchIcon from "../Images/search.png" ;
import Notifications from "../Images/bell.png" ;
import Message from "../Images/message.png" ;
import ProfileImage from "../Images/Profile.png" ;

export default function NavBar() {
  return (
    <div className='mainNavBar'>
        <div className='logoConatianer'>
            <p>Social</p>
        </div>
        <div>
            <div className='SearchInputConatiner'>
                <img src={`${searchIcon}`} className="searchIcon" alt="" />
                <input type="text" className="searchInput" placeholder='Search Your Homies' id="" />
            </div>
        </div>
        <div className='IconConatiner'>
            <img src={`${Notifications}`} className="Icons" alt="" />
            <img src={`${Message}`} className="Icons" alt="" />
            
            <div style={{display:'flex' , alignItems:'center'}}>
                <img src={`${ProfileImage}`} className="ProfileImage"alt="" />
                <p style={{marginLeft:"3px"}}>Harrington</p>
               

            </div>


        </div>


    </div>
  )
}

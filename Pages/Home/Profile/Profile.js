import React from 'react' ;
import './Profile.css';
import NavBar from '../../../Components/NavBar/NavBar';
import Leftbar from '../../../Components/LeftSideConatiner/Leftbar';
import MainPost from '../../../Components/MainPostContainer/MainPost';
import Rightbar from '../../../Components/RightSideContainer/Rightbar';

export default function Profile() {
  return (
    <div  className='ProfileContainer'>
        <NavBar />
        <div className='SubProfileConatiner'>
            <Leftbar />
            <MainPost />
            <Rightbar />

        </div>



    </div>
  )
}

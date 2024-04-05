import React from 'react';
import "./Home.css"
import NavBar from '../../Components/NavBar/NavBar';
import Leftbar from '../../Components/LeftSideConatiner/Leftbar';
import MainPost from '../../Components/MainPostContainer/MainPost';
import Rightbar from '../../Components/RightSideContainer/Rightbar';

export default function Home() {
  return (
    <div className='Home'>
        <NavBar />
        <div className='ComponentConatiner'>
            <Leftbar />
            <MainPost />
            <Rightbar /> 
        </div>
       

    </div>
  )
}

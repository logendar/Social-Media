import React, { useState } from 'react';
import './post.css';
import ProfileImage from '../Images/Profile.png';
import LikeIcon from '../Images/like.png';
import CommentIcon from '../Images/speech-bubble.png';
import ShareIcon from '../Images/share.png';
import MoreOption from '../Images/more.png';
import anotherLikeIcon from '../Images/setLike.png';

export default function Post() {
  const [like, setLike] = useState(LikeIcon);
  const [count, setCount] = useState(10);
  const [comments, setComments] = useState([]);
  const [commentWriting, setCommentWriting] = useState('');
  const [Show, setShow] = useState(false);

  const handleLike = () => {
    if (like === LikeIcon) {
      setLike(anotherLikeIcon);
      setCount(count + 1);
    } else {
      setLike(LikeIcon);
      setCount(count - 1);
    }
  };

  const addComment = () => {
    const newComment = {
      "id": "61fsbf23123123123",
      "username": "Steve",
      "title": commentWriting
    };
    setComments(comments.concat(newComment)); // Use a different variable name for the comment object
  };

  const handleComment = () => {
    addComment();
  };

  console.log(comments); 
  const handleShow =() =>{
    if (Show === false){
      setShow(true)
    }
    else{
      setShow(false)
    }

  }

  return (
    <div className='PostContainer'>
      <div className='SubpostConatiner'>
        <div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={`${ProfileImage}`} className='PostImage' alt='' />
            <div>
              <p style={{ marginLeft: '4px', textAlign: 'start' }}>Steve</p>
              <p style={{ fontSize: '11px', textAlign: 'start', marginLeft: 5, marginTop: -13, color: '#aaa' }}>Following by Steve</p>
            </div>
            <img src={`${MoreOption}`} className='moreicons' alt=' ' />
          </div>
          <p style={{ textAlign: 'start', width: '92%', marginLeft: 10, marginTop: 0 }}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci laborum commodi quasi perferendis aperiam, repellat numquam distinctio illo provident quidem quam accusantium, fuga........</p>
          <img src={`${ProfileImage}`} className='PostImages' alt='' />
          <div style={{ display: 'flex' }} >
            <div style={{ display: 'flex', marginLeft: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                <img src={`${like}`} className='IconforPost' onClick={handleLike} alt="" />
                <p style={{ marginLeft: '6px' }}>{count}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px', cursor: 'pointer' }}>
                <img src={`${CommentIcon}`} className='IconforPost'onClick={ handleShow} alt="" />
                <p style={{ marginLeft: '6px' }}>{comments.length} Comments</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginLeft: '100px', cursor: 'pointer' }}>
                <img src={`${ShareIcon}`} className='IconforPost' alt="" />
                <p style={{ marginLeft: '6px' }}>Share</p>
              </div>
            </div>
          </div>
          {Show === true ?
            <>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={`${ProfileImage}`} className='PostImage' alt='' />
                <input type='text' className='CommentLineInput' placeholder='write something...' onChange={(e) => setCommentWriting(e.target.value)} />
                <button className='addComment' onClick={handleComment}>Post</button>
              </div>
              <div>
                {comments.map((item) => (
                  <div key={item.id} style={{ display: 'flex', alignItems: 'center' }}>
                  
                    <img src={ProfileImage} className='PostImage' alt='' />
                    <p style={{ marginLeft: '6px' }}>{item.username}</p>
                    <p style={{ marginLeft: "20px" }}>{item.title}</p>
                  </div>
                ))}
              </div>
            </>
            : ''
          }
        </div>
      </div>
    </div>
  );
}

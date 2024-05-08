import React, { useState } from 'react';
import './Home.css'; // Import your CSS file
import reviewImg from '../../assets/user-account.png';
import WriteReview from './WriteReview.jsx';
function Reviews() {
  
 
 
  const [leaveAmessage, setLeaveAmessage] = useState(false);

  const openReview = () => {
    setLeaveAmessage(true);
    
  };

  function closeReview() {
   setLeaveAmessage(false);
  }
 
  
  return (
  <div className="reviewSection"> 
       <div className="reviewF">
         <h1>What customers say </h1>
         <button onClick={openReview}> write a review</button>
         {leaveAmessage && <WriteReview  onClose={closeReview}
 openReview={openReview} leaveAmessage={leaveAmessage}/>}
       </div>
      
       <div  className="reviewS">
        <div className="reviewcard">
         <div className="reviewcardtitle">
            <img src={reviewImg} className="reviewImg"/>
            <div className="reviewcardtitleS" >
             <p>name</p>
             <p>date</p>
            </div>
           
           </div>
        
          <p>In the quiet of the night, when the world seems to hold its breath, there's a certain magic that dances in the air. It's in the way the stars twinkle like secret.In the quiet of the night, when the world seems to hold its breath, there's a certain magic that dances in the air. It's in the way the stars twinkle like secret</p>
        </div>
        <div className="reviewcard">
           <div className="reviewcardtitle">
            <img src={reviewImg} className="reviewImg"/>
            <div className="reviewcardtitleS" >
             <p>name</p>
             <p>date</p>
            </div>
           
           </div>
        
          <p>In the quiet of the night, when the world seems to hold its breath, there's a certain magic that dances in the air. It's in the way the stars twinkle like secret.</p>
          </div>
         <div className="reviewcard">
          <div className="reviewcardtitle">
            <img src={reviewImg} className="reviewImg"/>
            <div className="reviewcardtitleS" >
             <p>name</p>
             <p>date</p>
            </div>
           
           </div>
        
          <p>In the quiet of the night, when the world seems to hold its breath, there's a certain magic that dances in the air. It's in the way the stars twinkle like secret.</p>
          </div>
          
        
       </div>
        <button className="showMoreButton" >...</button>
      
  </div>
  );
}

export default Reviews;


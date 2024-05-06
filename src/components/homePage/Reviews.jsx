import React, { useState } from 'react';
import './Home.css'; // Import your CSS file
import reviewImg from '../../assets/user-account.png';
import WriteReview from './WriteReview.jsx';
function Reviews() {
  const reviewData = [
  
  {
    id: 2,
    title: "Excellent service",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
   
  },
  {
    id: 3,
    title: "Highly recommended",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  
   },
   {
    id: 4,
    title: "Highly recommended",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
  
   {
    id: 5,
    title: "Highly recommended",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
   
    id: 6,
    title: "Highly recommended",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  
  },
   {
    id: 7,
    title: "Highly recommended",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "https://via.placeholder.com/800x400?text=Review+1",
  },
   {
    id: 8,
    title: "Highly recommended",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
   image: "https://via.placeholder.com/800x400?text=Review+1"},
   {
    id: 9,
    title: "Highly recommended",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  image: "https://via.placeholder.com/800x400?text=Review+1",
  },
   {
    id: 10,
    title: "Highly recommended",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
   image: "https://via.placeholder.com/800x400?text=Review+1",
  },
  {
    id: 11,
    title: "Highly recommended",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
   image: "https://via.placeholder.com/800x400?text=Review+1",
  },
  {
    id: 12,
    title: "Highly recommended",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "https://via.placeholder.com/800x400?text=Review+1"},
  {
    id: 13,
    title: "Highly recommended",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "https://via.placeholder.com/800x400?text=Review+1",
  },
  {
    id: 14,
    title: "Highly recommended",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "https://via.placeholder.com/800x400?text=Review+1",
  },
  {
    id: 15,
    title: "Highly recommended",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "https://via.placeholder.com/800x400?text=Review+1",
  },
  // Add more reviews as needed
];
 
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
        <button className="showMoreButton" >- View All -</button>
      
  </div>
  );
}

export default Reviews;


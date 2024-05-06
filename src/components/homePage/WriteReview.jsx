
import React, { useState } from 'react';
import Modal from '../UI/Modal.jsx'; // Assuming the Modal component is in the same import React, { useState } from 'react';
import Button from '../UI/Button.jsx';
import './Home.css';
const WriteReview = ({ onClose,openReview,leaveAmessage}) => {
 

 

  return (
   <Modal className="cart"   open={leaveAmessage} >
  
    
   <Button textOnly 
           className="review-modal-close-button"
	   onClick={onClose}> X</Button>
    
   <form  method="post">
    <div className="reviewForm">
    <label for="comment">Your Comment:</label><br />
    <textarea id="comment" name="comment" rows="4" required></textarea><br />
     <button type="submit" >Submit</button>
    </div>
    
</form>
  
  </Modal>
  );
};

export default WriteReview;


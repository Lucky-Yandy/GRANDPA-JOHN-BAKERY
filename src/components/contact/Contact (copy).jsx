import './Contact.css';
import {useState} from 'react';
import contactimg from '../../assets/2.jpg';
import phoneIcon from  '../../assets/phone.png';
import emailIcon from  '../../assets/email.png';
import locationIcon from  '../../assets/location.png';
import facebookIcon from  '../../assets/facebook.png';
import instagramIcon from  '../../assets/Instagram.png';
export default function Contact(){
   const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    orderId: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };
  return (
  
  <div className="contactContent">
   
     <div className="contactFirstSection">                   
         <h1 className="contactTitle">Contact Us</h1>
         <p> this is some explaination about contact section</p>
         <img className="contactimg" src={contactimg}/>
     </div>
    
     <div className="contactSecondSection"> 
         <div className="secondeSectionContentBox">
          <div >
            <h2>Contact information</h2>
            <p> this is some explaination about contact section,some explaination about contact section hahahahaha</p>
            <div className="contactSecondSection_info">
		<div className="contactSecondSection_info-div"> 
		 <img className="contacticons" src={phoneIcon}/>
		 <p>123456678</p>
		</div>
		<div className="contactSecondSection_info-div"> 
		  <img className="contacticons" src={emailIcon}/>
		 <p>grandpajohn@gmail.com</p>
		</div>
		<div className="contactSecondSection_info-div"> 
		  <img className="contacticons" src={locationIcon}/>
		 <p>9am~6pm</p>
		</div>  
            </div> 
          </div>      
         </div>
         
         <div className="contactThirdSection">
          <div className="contactThirdSection-left">
            <div className="contactThirdSection-left-layout" >
        <h2 >Get In Touch!</h2>
        <p>some text going here,try to explain sometiong here</p>
        <form  onSubmit={handleSubmit}>
        <div>
         <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Name"
          className="contact-input"
          required
        />
       </div>
       <div>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
           placeholder="Email"
          className="contact-input"
          required
        />
      </div>
      <div>
        <input
          type="text"
          id="orderId"
          name="orderId"
          value={formData.orderId}
          onChange={handleChange}
          placeholder="Order Id (optional)"
          className="contact-input"
          
        />
      </div>
      <div>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="contact-textarea"
           placeholder="Leave a message"
          required
        />
      </div>
      <button type="submit">Submit</button>
      </form>
     </div>
                
      </div>
          <div className="contactThirdSection-right">
            <div className="contactThirdSection-right-layout">
		  <h2>Our Location</h2>
		  <p> write something here</p>
		  
		  <h3>Social Media</h3>
		  <div className="socialmedia">
		     <img className="contacticons" src={facebookIcon}/>
		     <img className="contacticons" src={instagramIcon}/>
		  </div> 
            </div>
            
          </div>
         
         </div>
         
         
         
         
     </div>
  
  </div>

 );
 
}

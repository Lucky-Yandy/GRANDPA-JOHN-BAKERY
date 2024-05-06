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
      <div className="InfoContent">
      <div className="SomeInfo"> 
        <h2>Contact information</h2>       
           <div className="SomeInfodiv"> 
	     <img className="contacticons" src={phoneIcon}/>
	     <p>123456678</p>
	    </div>
	    <div className="SomeInfodiv"> 
            <img className="contacticons" src={emailIcon}/>
	    <p>grandpajohn@gmail.com</p>
            </div>
	    <div className="SomeInfodiv"> 
	    <img className="contacticons" src={locationIcon}/>
		 <p>567 27th Ave Newyork 45321 </p>
	     </div>  
           
      
      </div>
      <div className="contactFormlayout" >
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
      <button type="submit">Send</button>
      </form>
     </div>
      
      </div>
    
  
  </div>

 );
 
}

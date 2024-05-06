import { Link } from 'react-router-dom';
import homebackground from '../../assets/13.jpg';
import img5 from '../../assets/5.jpg';
import img1 from '../../assets/1.jpg';
import img12 from '../../assets/12.jpg';
import img14 from '../../assets/14.jpg';
import img15 from '../../assets/15.jpg';
import img10 from '../../assets/10.jpg';
import img11 from '../../assets/11.jpg';
import img13 from '../../assets/13.jpg';
import Reviews from './Reviews.jsx';
import './Home.css';
export default function Home(){

 return (
 
     <div className="homepage_padding">
     
      <div className="section1">
        <img src={homebackground} className="background-image"/>
        <div className="overlay">
          <h1>HANDMADE BAKED GOODS AND PASTRIES</h1>
        </div>
      </div>
      <div className="forVideo">
        <div className="section2">
          <div className="text-with-line">
           <h1>Grandpa John</h1>
           </div>
        </div>
      
      
      
      <div className="section3">    
        <div className="section3-text" >
         <p>Grandpa John's is more than just a bakery; it's a nostalgic journey through the art of handcrafted baked goods and pastries. Established with a passion for traditional baking techniques and a commitment to quality ingredients, Grandpa John's embodies the warmth and comfort of homemade treats. From flaky croissants to decadent cakes, each creation tells a story of artisanal expertise and unwavering dedication. With a focus on taste, texture, and timeless recipes, Grandpa John's invites you to savor every bite and experience the simple joys of freshly baked delights. </p>
          
          <Link to="/about"> <button >More</button></Link>
         </div>   
       </div>
       
        <div className="section3-video "> 
	       <iframe 
	        className="videosize"
		src="https://www.youtube.com/embed/LGyK2sPgx6o?si=fSPuOH5vQsRBQc1d&modestbranding=1&rel=0&controls=0&start=5" 
		title="Grandpa John's Bakery" 
		frameBorder="0" 
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  
		allowFullScreen>
	       </iframe>
        </div>
      </div>
      <div className="onesweetaday"><h1>One sweet a day</h1></div>
      <div className="home_section4">
           <img className="home_section4_img" src={img14}/> 
           <div className="home_section4_text"><p>Organic</p></div>  
           <img className="home_section4_img" src={img15}/>
           <div className="home_section4_text"><p>Handmade</p></div>  
           <img className="home_section4_img" src={img10}/>         
       </div>
       <div className="home_section4">
          <div className="home_section4_text"><p>Love</p></div>      
           <img className="home_section4_img" src={img11}/>
            <div className="home_section4_text"><p>Fresh</p></div>  
           <img className="home_section4_img" src={img11}/>
            <div className="home_section4_text"><p>Healthy</p></div>  
       </div>
       
      <Reviews />
      <div style={{height:'100px',background:'Aliceblue'}}></div>
    
    </div>
     
   
 )
 
}

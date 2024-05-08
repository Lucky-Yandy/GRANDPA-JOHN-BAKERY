import {useState, useEffect} from 'react'; 
import { Link } from 'react-router-dom';
import homebackground1 from '../../assets/imgforHomepage/BKGDisplay1.jpg';
import homebackground2 from '../../assets/imgforHomepage/BKGDisplay2.jpg';
import homebackground3 from '../../assets/imgforHomepage/BKGDisplay3.jpg';
//import introducingpics from '../../introducing.json';
import blueberryCake from '../../assets/introducing/blueberry-cake.jpg';
import cheeseCake from '../../assets/introducing/cheese-cake.jpg';
import chocolateCookie from '../../assets/introducing/chocolate-cookie.jpg';
import colorfulCookie from '../../assets/introducing/colorful-cookie.jpg';
import croissant from '../../assets/introducing/croissant.jpg';
import cupcake from '../../assets/introducing/cup-cake.jpg';
import granola from '../../assets/introducing/granola.jpg';
import lemoncake from '../../assets/introducing/lemon-cake.jpg';
import naturalyeastbread from '../../assets/introducing/natural-yeast-bread.jpg';
import sourdough from '../../assets/introducing/sourdough.jpg';
import sweetheart from '../../assets/introducing/sweetheart.jpg';
import swirlcake from '../../assets/introducing/swirl-cake.jpg';
import Reviews from './Reviews.jsx';
import './Home.css';



export default function Home(){
 
  
  
  
  
  
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgrounds = [homebackground1, homebackground2, homebackground3];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex(prevIndex =>
        prevIndex === backgrounds.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);
 return (
 
     <div className="homepage_padding">
     
       <div className="section1" style={{ backgroundImage: `url(${backgrounds[backgroundIndex]})` }}>
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
           <div>
             <img className="home_section4_img" src={blueberryCake} loading="lazy"/>
             <p>Blueberry Cake</p>
           </div>
           <div>
             <img className="home_section4_img" src={cheeseCake} loading="lazy"/>
             <p>Cheese Cake</p>
           </div>
           <div>
             <img className="home_section4_img" src={chocolateCookie} loading="lazy"/>
             <p>Chocolate Cookie</p>
           </div>
           <div>
             <img className="home_section4_img" src={colorfulCookie} loading="lazy"/>
             <p>Colorful Cookie</p>
           </div>
           <div>
             <img className="home_section4_img" src={croissant} loading="lazy"/>
             <p>Croissant</p>
           </div>
           <div>
             <img className="home_section4_img" src={cupcake} loading="lazy"/>
             <p>Cupcake</p>
           </div>
           <div>
             <img className="home_section4_img" src={granola} loading="lazy"/>
             <p>Granola</p>
           </div>
           <div>
             <img className="home_section4_img" src={lemoncake} loading="lazy"/>
             <p>Lemon Cake</p>
           </div>
           <div>
             <img className="home_section4_img" src={naturalyeastbread} loading="lazy"/>
             <p>Natural Yeast Bread</p>
           </div>
           <div>
             <img className="home_section4_img" src={sweetheart} loading="lazy"/>
             <p>Sweetheart</p>
           </div>
           <div>
             <img className="home_section4_img" src={ sourdough} loading="lazy"/>
             <p> Sourdough</p>
           </div>
           <div>
             <img className="home_section4_img" src={swirlcake} loading="lazy"/>
             <p>Swirl Cake</p>
           </div>
       </div>
      
       
      <Reviews />
    
    
    </div>
     
   
 )
 
}

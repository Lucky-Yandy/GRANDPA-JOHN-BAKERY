import './About.css';
import shopImg from '../../assets/shop.jpg';
import productImg from '../../assets/products.jpg';

export default function About(){

 return (
 
   <div>
      <div className="about">
        <div className="about-person">
          <div className="about-person-left">
            <img className="about-img" src={shopImg} />
          </div>
          <div className="about-person-right">
            <h1>About grandpa John's bakery</h1>
            <p> Grandpa John is a beloved figure in our community, known for his warm smile, gentle demeanor, and passion for baking. With decades of experience in the art of baking, Grandpa John has become a household name, admired for his delicious treats and dedication to his craft.

Grandpa John's bakery shop is a cozy haven nestled in the heart of our town, where the inviting aroma of freshly baked goods fills the air. Stepping into his shop is like entering a nostalgic paradise, with shelves lined with an array of mouthwatering pastries, bread, and cakes, all lovingly crafted by Grandpa John himself.

</p>
          </div>
        </div>
        <div className="about-bakery">
          <div className="about-bakery-left">
            <h1>Our products</h1>
            <p> Grandpa John's bakery shop is renowned for its exquisite range of products, each crafted with the utmost care and dedication to quality. From classic pastries to artisanal bread, every item reflects Grandpa John's unwavering commitment to his craft and his passion for creating memorable culinary experiences.

One of the bakery's signature offerings is its decadent selection of pastries. Whether it's flaky croissants filled with rich chocolate, delicate fruit tarts bursting with seasonal flavors, or buttery danishes adorned with sweet glazes, each pastry is a masterpiece of flavor and texture, delighting the senses with every bite.

</p>
          </div>
          <div className="about-bakery-right">
            <img className="about-img" src={productImg} />
          </div>
        </div>
      </div>
    </div>
 )
 
}

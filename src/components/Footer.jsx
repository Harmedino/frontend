// components/Footer.js
import classes from "./Footer.module.css"; 
// import image from '../image/Vector.png'

const Footer = () => { 
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContent}>
        <div className={classes.logo}>
          <h1> Your E-Commerce Store </h1> {/* Updated e-commerce store name */}
        </div>
        <div className={classes.footerColumn}>
          <h3>Shop</h3> {/* Changed "About Us" to "Shop" */}
          <ul>
            <li>Products</li> {/* Updated links */}
            <li>Categories</li>
            <li>Brands</li>
            <li>Deals</li>
          </ul>
        </div>
        <div className={classes.footerColumn}>
          <h3>Customer Support</h3> {/* Changed "Help Center" to "Customer Support" */}
          <ul>
            <li>Contact Us</li>
            <li>FAQs</li> {/* Added FAQs */}
            <li>Returns & Exchanges</li> {/* Added Returns & Exchanges */}
            <li>Shipping Information</li> {/* Added Shipping Information */}
          </ul>
        </div>

        <div className={classes.footerColumn}>
          <h3>Language</h3>
          {/* <p className={classes.vector}><span><img src={image} alt="" /></span>Nigeria</p> */}
          <select name="lan" id="lan">
            <option value="English">English</option> {/* Corrected typo in "English" */}
            <option value="French">French</option> {/* Added French language option */}
          </select>
        </div>

      </div> 

      <hr />
      <p className={classes.copyRight}>
        &copy; {new Date().getFullYear()} Your E-Commerce Store. All rights reserved. {/* Updated copyright year */}
      </p>
    </footer>
  );
};

export default Footer;

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import wave3 from "/public/wave3.svg";

const Footer = () => {
  return (
    <>
      <div className="wave3-container">
        <img src={wave3} alt="wave3" className="wave3settings-store" />
      </div>
      <div className="footer-main">
        <div className="footer-links">
          {" "}
          <div className="shop-links">
            <h3 className="shoplinks-title">SHOP</h3>
            <p className="link">Clothes</p>
            <p className="link">Technology</p>
            <p className="link">Gift Card</p>
            <p className="link">Stores</p>
            <p className="link">Refer a Friend</p>
          </div>
          <div className="shop-links">
            <h3 className="shoplinks-title">HELP</h3>
            <p className="link">Contact Us</p>
            <p className="link">FAQ</p>
            <p className="link">Accessibility</p>
          </div>
          <div className="shop-links">
            <h3 className="shoplinks-title">ABOUT</h3>
            <p className="link">Our Story</p>
            <p className="link">Products</p>
            <p className="link">Jobs</p>
            <p className="link">Program</p>
            <p className="link">Press</p>
          </div>
        </div>
        <div className="footer-subscribe">
          <p className="subscribe-message">
            Subscribe to get 15% off your first order{" "}
          </p>
          <div className="subscribe-buttons-container">
            <input
              type="email"
              placeholder="Your Email Address"
              className="input-email"
            />
            <button className="subscribe-button">Subscribe</button>
          </div>
          <div className="socialmediacontainer">
            <FacebookIcon className="media-button" />
            <InstagramIcon className="media-button" />
            <TwitterIcon className="media-button" />
            <LinkedInIcon className="media-button" />
          </div>
        </div>
      </div>
      <div className="footer-bottom-bar">
        <div className="bottom-rights">
          © 2022 Oswaldo Soto, Inc. All Rights Reserved{" "}
        </div>
        <div className="bottom-links">
          <div className="bottom-items">Terms of Service</div>
          <div className="bottom-items">Privacy Policy</div>
          <div className="bottom-items">Do not sell my Information</div>
        </div>
      </div>
    </>
  );
};

export default Footer;

import SwipperItem from "../components/SwipperItem";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { questionsanswers } from "../data/questionsanswers";
import { reviews } from "../data/reviews";
import { QAitem } from "../components/QAitem";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MessageIcon from "@mui/icons-material/Message";
import landingImg from "/landing.jpg";
import image from "/undraw_wishlist3.svg";
import iphone from "/public/iphone.jpg";
import wave from "/wave.svg";
import wave2 from "/wave2.svg";
import "swiper/css/pagination";
import "swiper/css";
import { Link } from "react-router-dom";

type Props = {};

const HomeTwo = (props: Props) => {
  return (
    <>
      <div
        className="home-landing-image"
        style={{ backgroundImage: `url(${landingImg})` }}>
        <div className="home-landing-container">
          <p className="home-landing-title">
            {" "}
            Your Journey to a better shopping experience, starts here.
          </p>

          <Link to={"/store"} className="button-container-landing">
            <div className="home-landing-shop-button"> Shop Now!</div>
          </Link>

          <p className="home-landing-subtitle">ALWAYS FREE SHIPPING!</p>
        </div>
      </div>
      <div className="wave1-container">
        <img src={wave} alt="wave1" className="wave1settings" />
      </div>
      <div className="shopping-features">
        <div className="features-container">
          <div className="feature">
            <LocalAtmIcon className="feature-icon" />
            <p className="feature-text">Save 15% on every order! </p>
          </div>
          <div className="feature">
            <CalendarMonthIcon className="feature-icon" />
            <p className="feature-text">Cancel when is necessary! </p>
          </div>
          <div className="feature">
            <MessageIcon className="feature-icon" />
            <p className="feature-text">Manage orders via text message! </p>
          </div>
        </div>
      </div>
      <div className="timetoshop-container">
        <div className="timetoshop-info">
          <h1 className="timetoshop-title">
            Time to shop. It's simple & easy!
          </h1>
          <p className="timetoshop-subtitle">SHOP TO ANY PRODUCT YOU LIKE</p>
          <p className="timetoshop-text">Select between clothes or tech.</p>

          <p className="timetoshop-subtitle">TEXT WITH US</p>
          <p className="timetoshop-text">
            Shoot us a text message to swap, pause, or cancel your next order!
          </p>
          <p className="timetoshop-subtitle">CANCEL AT ANY TIME</p>
          <p className="timetoshop-text">No hard feelings.</p>
          <br />
          <Link to={"/store"} className="button-container">
            <div className="home-landing-shop-button"> Shop Now!</div>
          </Link>
        </div>
        <div className="timetoshop-img-container">
          <img src={image} className="timetoshop-img"></img>
        </div>
      </div>
      <div className="whyshop-container">
        <h1 className="whyshop-title">Why shop whith us?</h1>
        <div className="whyshop-items-container">
          <div className="whyshop-item1">
            <p className="whyshop-item-title">You Pay Less &#x1F4B0;</p>
            <p className="whyshop-item-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
              eligendi!
            </p>
          </div>
          <div className="whyshop-item2">
            <p className="whyshop-item-title">Exclusive Perks &#x1F680;</p>
            <p className="whyshop-item-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia{" "}
              <span>hire me ;)</span> placeat voluptatem suscipit quibusdam amet
              quo dignissimos esse!
            </p>
          </div>
          <div className="whyshop-item3">
            <p className="whyshop-item-title">No Strings Attached &#x1F4A5; </p>
            <p className="whyshop-item-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
              eligendi!
            </p>
          </div>
          <div className="whyshop-item4">
            <p className="whyshop-item-title">Money Back Guarantee &#x1F91D;</p>
            <p className="whyshop-item-text">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className="timetoshop-container">
        <div className="timetoshop-info">
          <h1 className="timetoshop-title">Just shoot us a text &#x1F4AC;</h1>
          <p className="timetoshop-subtitle">3 DAY MAXIMUM!</p>
          <p className="timetoshop-text">
            We send you a text when we start packing your next order.
          </p>

          <p className="timetoshop-subtitle">
            CHANGE YOUR ORDER VIA TEXT MESSAGES!
          </p>
          <p className="timetoshop-text">
            Use our custom texting platform to swap, skip or cancel your next
            order.
          </p>
          <p className="timetoshop-subtitle">VIP THREATMENT</p>
          <p className="timetoshop-text">
            Our support team is readily available to answer any subscription
            questions or concerns via text!
          </p>
          <br />
        </div>
        <div className="timetoshop-img-container">
          <img src={iphone} className="timetoshop-img"></img>
        </div>
      </div>
      <div className="wave2-container">
        <img src={wave2} alt="wave2" className="wave2settings" />
      </div>

      <div className="swipper-container">
        <Swiper
          autoplay={true}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="swipper">
          {reviews.map(item => {
            return (
              <SwiperSlide key={item.user}>
                <SwipperItem key={item.user} {...item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="wave-container">
          <img src={wave2} alt="wave2" className="wave2settings" />
        </div>
      </div>
      <h1 className="whyshop-title">Got questions? We got answers!</h1>

      <div className="qa-container">
        <div className="qa-section">
          {questionsanswers.map(item => {
            return <QAitem {...item} key={item.id} />;
          })}
          <br />
          <br />
          <Link to={"/store"} className="button-container">
            <div className="home-landing-shop-button"> Shop Now!</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeTwo;

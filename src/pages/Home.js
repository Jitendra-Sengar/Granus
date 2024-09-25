import React from "react";
import { motion } from "framer-motion";
import Slider from "../components/Slider";
import Granusstore from "../components/Granusstore";
import Cards from "../components/Cards";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import './page.css'
import './home.css'


const Home = () => {
  
  const data = [
    {
      imgurl: "order.png",
      name: "Ram",
      review: "The Granus community is amazing.",
    },
    {
      imgurl: "store.png",
      name: "Store",
      review: "First class",
    },
    {
      imgurl: "buysell.png",
      name: "buysell",
      review: "sell your crop easily",
    },
  ];

  return (
    <div className="section-padding-top">
      
      <Slider />
      <Granusstore />

      {/* Key-Features */}
      <div id="key-features" className="container my-5">
      {/* Key Features Heading */}
      <motion.div className="text-center mb-5"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{
          duration: 3,
          delay: 0.2
        }}
        whileHover={{ scale: 1.5, opacity: 3 }}
      >
        <h3>Key Features</h3>
        <p>Discover how Granus can benefit you</p>
      </motion.div>

      {/* Features Cards */}
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <Cards title="Transparency" imgurl="transparency.jpg" />
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <Cards title="Fair Trade" imgurl="fairtrade.png" />
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <Cards title="User Friendly" imgurl="userfriendly.png" />
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <Cards title="Supply Chain" imgurl="supplychain.png" />
        </div>
      </div>
    </div>

      {/* Services */}
      <div id="services" className="container my-5">
      {/* Services Heading */}
      <motion.div className="text-center mb-5"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{
          duration: 3,
          delay: 0.2
        }}
        whileHover={{ scale: 1.5, opacity: 3 }}
      >
        <h3>Our Services</h3>
        <p>
          Granus provides all of the services through internal operations in
          combination with our specialized network.
        </p>
      </motion.div>

      {/* Services Cards */}
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <Cards
            title="Order Online General Store items in a range of 5km"
            imgurl="order.png"
          />
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <Cards title="Sales Contract Agreement" imgurl="salescontract.png" />
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <Cards title="Quality Control" imgurl="qualitycontrol.png" />
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <Cards title="Logistics and transportation" imgurl="transportation.jpg" />
        </div>
      </div>
    </div>

      {/* Testimonials */}
      <div id="testimonials" className="container my-5">
      <motion.div
        className="text-center mb-5"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 3, delay: 0.2 }}
        whileHover={{ scale: 0.9, opacity: 3 }}
      >
        <h3>Our Testimonials</h3>
        <p>What Our Customers Say</p>
      </motion.div>

      {/* Ensure the Carousel works properly */}
      <Carousel fade>
        {data.map((testimonial, index) => (
          <Carousel.Item key={index}>
            <motion.div
              className="d-flex flex-column justify-content-center align-items-center"
              initial={{ x: -100 }}
              animate={{ x: 1 }}
              transition={{ duration: 3, delay: 0.2 }}
              whileHover={{ scale: 0.9, opacity: 3 }}
            >
              {/* Ensure Image is visible */}
              <Image
                src={testimonial.imgurl}
                roundedCircle
                className="img-fluid testimonial-img"
                alt={testimonial.name}
              />
              <div className="mt-3 text-center">
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <p className="testimonial-review">{testimonial.review}</p>
              </div>
            </motion.div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>

    </div>
  );
};

export default Home;

import React from "react";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import { motion } from "framer-motion";

const Slider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <div className="row m-5 db">
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
              <motion.h4
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{
                  duration: 3,
                  delay: 0.2,
                }}
                whileHover={{ scale: 1.4, opacity: 3 }}
                className="text-center"
              >
                Order without Lifting Your Finger
              </motion.h4>
            </div>

            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
              <Image
                src="store.png"
                className="img-fluid"  /* Makes image responsive */
                alt="store png"
              />
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="row m-5">
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
              <motion.h4
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{
                  duration: 3,
                  delay: 0.2,
                }}
                whileHover={{ scale: 1.4, opacity: 3 }}
                className="text-center"
              >
                Buy Agri Material directly from Farmers.
              </motion.h4>
            </div>

            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
              <Image
                src="buysell.png"
                className="img-fluid"  /* Makes image responsive */
                alt="..."
              />
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="row m-5">
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
              <motion.h4
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{
                  duration: 3,
                  delay: 0.2,
                }}
                whileHover={{ scale: 0.9, opacity: 3 }}
                className="text-center"
              >
                Support the farmers by buying their raw material directly from their homes
              </motion.h4>
            </div>

            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
              <Image
                src="supportfarmers.png"
                className="img-fluid"  /* Makes image responsive */
                alt="..."
              />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;

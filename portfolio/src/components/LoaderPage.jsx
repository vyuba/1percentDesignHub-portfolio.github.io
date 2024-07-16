// import React from 'react'

import { motion } from "framer-motion";
// import { Link } from 'react-router-dom';
// import { Suspense } from 'react';
function LoaderPage() {

    const icon = {
        hidden: {
          opacity: 0,
          pathLength: 0,
          fill: "rgba(255, 255, 255, 0)",
        },
        visible: {
          opacity: 1,
          pathLength: 1,
          fill: "rgba(255, 255, 255, 1)",
        },
      };
  return (
    <div className="loaderPage">
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 39 24"
      className="item w-2/5 md:w-2/6 lg:w-2/12"
    >
      <motion.path
        d="M4.992 23V2.2L6.816 4.088H0.256V0.599998H9.152V23H4.992ZM16.4115 23L31.7075 0.599998H34.8435L19.5475 23H16.4115ZM18.2675 12.664C17.2222 12.664 16.2942 12.408 15.4835 11.896C14.6728 11.384 14.0435 10.6693 13.5955 9.752C13.1475 8.83467 12.9235 7.75733 12.9235 6.52C12.9235 5.28267 13.1475 4.20533 13.5955 3.288C14.0435 2.37067 14.6728 1.656 15.4835 1.144C16.2942 0.631999 17.2222 0.375999 18.2675 0.375999C19.3555 0.375999 20.2942 0.631999 21.0835 1.144C21.8942 1.656 22.5235 2.37067 22.9715 3.288C23.4195 4.20533 23.6435 5.28267 23.6435 6.52C23.6435 7.75733 23.4195 8.83467 22.9715 9.752C22.5235 10.6693 21.8942 11.384 21.0835 11.896C20.2942 12.408 19.3555 12.664 18.2675 12.664ZM18.2995 10.424C19.1528 10.424 19.8142 10.0933 20.2835 9.432C20.7742 8.74933 21.0195 7.77867 21.0195 6.52C21.0195 5.26133 20.7742 4.30133 20.2835 3.64C19.8142 2.95733 19.1528 2.616 18.2995 2.616C17.4462 2.616 16.7635 2.95733 16.2515 3.64C15.7608 4.32267 15.5155 5.28267 15.5155 6.52C15.5155 7.75733 15.7608 8.71733 16.2515 9.4C16.7635 10.0827 17.4462 10.424 18.2995 10.424ZM32.9555 23.224C31.9102 23.224 30.9822 22.968 30.1715 22.456C29.3608 21.944 28.7315 21.2293 28.2835 20.312C27.8355 19.3947 27.6115 18.3173 27.6115 17.08C27.6115 15.8427 27.8355 14.7653 28.2835 13.848C28.7315 12.9307 29.3608 12.216 30.1715 11.704C30.9822 11.192 31.9102 10.936 32.9555 10.936C34.0435 10.936 34.9822 11.192 35.7715 11.704C36.5822 12.216 37.2115 12.9307 37.6595 13.848C38.1075 14.7653 38.3315 15.8427 38.3315 17.08C38.3315 18.3173 38.1075 19.3947 37.6595 20.312C37.2115 21.2293 36.5822 21.944 35.7715 22.456C34.9822 22.968 34.0435 23.224 32.9555 23.224ZM32.9555 20.984C33.8088 20.984 34.4808 20.6427 34.9715 19.96C35.4622 19.2773 35.7075 18.3173 35.7075 17.08C35.7075 15.8427 35.4622 14.8827 34.9715 14.2C34.4808 13.5173 33.8088 13.176 32.9555 13.176C32.1235 13.176 31.4515 13.5173 30.9395 14.2C30.4488 14.8613 30.2035 15.8213 30.2035 17.08C30.2035 18.3387 30.4488 19.3093 30.9395 19.992C31.4515 20.6533 32.1235 20.984 32.9555 20.984Z"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 9, ease: "easeInOut" },
          fill: { duration: 5, ease: [1, 0, 0.8, 1] },
        }}
      />
    </motion.svg>
  </div>
  )
}

export default LoaderPage
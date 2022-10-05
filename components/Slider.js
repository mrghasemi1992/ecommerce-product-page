/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation={true}
      className="mySwiper"
      spaceBetween={30}
    >
      <SwiperSlide>
        <img src="./assets/images/image-product-1.jpg" alt="Product" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./assets/images/image-product-2.jpg" alt="Product" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./assets/images/image-product-3.jpg" alt="Product" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./assets/images/image-product-4.jpg" alt="Product" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;

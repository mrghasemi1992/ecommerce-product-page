import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import Lightbox from "./Lightbox";

const DesktopSlider = () => {
  const [lightBoxIsOpen, setLightboxIsOpen] = useState(false);
  const [activeImg, setActiveImg] = useState(1);

  return (
    <>
      <div>
        <Image
          src={`/assets/images/image-product-${activeImg}.jpg`}
          width={500}
          height={500}
          alt="Product"
          className="rounded-xl cursor-pointer"
          onClick={() => setLightboxIsOpen(true)}
        />
        <div className="flex justify-between mt-4">
          <div
            className={`rounded-xl overflow-hidden h-[100px] w-[100px] relative cursor-pointer ${
              activeImg === 1 ? "border-2 border-primary-orange" : ""
            }`}
            onClick={() => setActiveImg(1)}
          >
            <Image
              src="/assets/images/image-product-1-thumbnail.jpg"
              layout="fill"
              alt="Product"
            />
            {activeImg === 1 ? (
              <div className="bg-white w-full h-full absolute z-10 opacity-50"></div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={`rounded-xl overflow-hidden h-[100px] w-[100px] relative cursor-pointer ${
              activeImg === 2 ? "border-2 border-primary-orange" : ""
            }`}
            onClick={() => setActiveImg(2)}
          >
            <Image
              src="/assets/images/image-product-2-thumbnail.jpg"
              layout="fill"
              alt="Product"
            />
            {activeImg === 2 ? (
              <div className="bg-white w-full h-full absolute z-10 opacity-50"></div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={`rounded-xl overflow-hidden h-[100px] w-[100px] relative cursor-pointer ${
              activeImg === 3 ? "border-2 border-primary-orange" : ""
            }`}
            onClick={() => setActiveImg(3)}
          >
            <Image
              src="/assets/images/image-product-3-thumbnail.jpg"
              layout="fill"
              alt="Product"
            />
            {activeImg === 3 ? (
              <div className="bg-white w-full h-full absolute z-10 opacity-50"></div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={`rounded-xl overflow-hidden h-[100px] w-[100px] relative cursor-pointer ${
              activeImg === 4 ? "border-2 border-primary-orange" : ""
            }`}
            onClick={() => setActiveImg(4)}
          >
            <Image
              src="/assets/images/image-product-4-thumbnail.jpg"
              layout="fill"
              alt="Product"
            />
            {activeImg === 4 ? (
              <div className="bg-white w-full h-full absolute z-10 opacity-50"></div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <AnimatePresence>
        {lightBoxIsOpen && (
          <Lightbox
            activeImg={activeImg}
            setActiveImg={setActiveImg}
            setLightboxIsOpen={setLightboxIsOpen}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default DesktopSlider;

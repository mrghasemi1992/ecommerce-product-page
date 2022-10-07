import { motion } from "framer-motion";
import Image from "next/image";

import CloseIcon from "../../public/assets/icons/icon-close.svg";

const Lightbox = ({ activeImg, setActiveImg, setLightboxIsOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed inset-0 flex flex-col items-center justify-center z-10 bg-black bg-opacity-80"
    >
      <div className="mb-8 w-[500px] ml-auto">
        <CloseIcon
          className="text-white hover:text-primary-orange cursor-pointer transform scale-150"
          onClick={() => setLightboxIsOpen(false)}
        />
      </div>
      <Image
        src={`/assets/images/image-product-${activeImg}.jpg`}
        width={500}
        height={500}
        alt="Product"
        className="rounded-xl"
      />
      <div className="flex mt-4 gap-x-4">
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
    </motion.div>
  );
};

export default Lightbox;

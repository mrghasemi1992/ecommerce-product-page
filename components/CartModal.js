import Image from "next/image";
import { motion } from "framer-motion";

const CartModal = ({ cartNumber, setCartModalIsOpen, setCartNumber }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="bg-white absolute rounded-lg z-10 top-[70px] w-[calc(100%-1rem)] left-1/2 transform -translate-x-1/2"
    >
      <h1 className="p-4">Cart</h1>
      <hr />
      {cartNumber ? (
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-4">
              <Image
                src="/assets/images/image-product-1-thumbnail.jpg"
                alt="Product"
                className="rounded-lg"
                width={50}
                height={50}
              />
              <div>
                <p className="text-neutral-darkGrayishBlue font-light">
                  Autumn Limited Edition...
                </p>
                <p className="text-neutral-darkGrayishBlue font-light">
                  $125 × {cartNumber}{" "}
                  <span className="font-semibold text-neutral-darkBlue">
                    ${cartNumber * 125}
                  </span>
                </p>
              </div>
            </div>
            <Image
              src="/assets/icons/icon-delete.svg"
              width={14}
              height={16}
              alt="Trash"
              onClick={() => setCartNumber(0)}
            />
          </div>
          <button className="flex items-center justify-center bg-primary-orange h-14 w-full rounded-lg text-white mt-4">
            Checkout
          </button>
        </div>
      ) : (
        <p className="text-neutral-darkGrayishBlue min-h-[140px] flex items-center justify-center">
          Your cart is empty.
        </p>
      )}
    </motion.div>
  );
};

export default CartModal;

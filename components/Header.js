import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { useClickAway } from "react-use";

import CartModal from "./CartModal";

const Header = ({ cartNumber, setCartNumber }) => {
  const [cartModalIsOpen, setCartModalIsOpen] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const menuRef = useRef(null);
  const cartModalRef = useRef(null);

  useClickAway(menuRef, () => setMenuIsOpen(false));
  useClickAway(cartModalRef, () => setCartModalIsOpen(false));

  return (
    <>
      <div className="bg-white p-4 flex justify-between items-center relative lg:hidden">
        <div className="flex gap-x-4 items-center">
          <Image
            src="/assets/icons/icon-menu.svg"
            width={16}
            height={15}
            alt="Menu"
            onClick={() => setMenuIsOpen(true)}
          />
          <Image
            src="/assets/images/logo.svg"
            width={138}
            height={20}
            alt="Logo"
          />
        </div>

        <div className="flex items-center gap-x-4">
          <div ref={cartModalRef}>
            <AnimatePresence>
              {cartModalIsOpen && (
                <CartModal
                  cartNumber={cartNumber}
                  setCartModalIsOpen={setCartModalIsOpen}
                  setCartNumber={setCartNumber}
                />
              )}
            </AnimatePresence>
            <div className="relative flex">
              <Image
                src="/assets/icons/icon-cart.svg"
                width={22}
                height={20}
                alt="Cart"
                onClick={() => setCartModalIsOpen(!cartModalIsOpen)}
              />

              {cartNumber ? (
                <div className="absolute bg-primary-orange text-white px-2 text-xs rounded-xl -top-2 -right-2">
                  {cartNumber}
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
          <Image
            src="/assets/images/image-avatar.png"
            width={30}
            height={30}
            alt="Avatar"
          />
        </div>

        <AnimatePresence>
          {menuIsOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-black bg-opacity-40 fixed inset-0 z-10"
            >
              <motion.div
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                exit={{ x: -300 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="bg-white w-2/3 h-full p-6"
                ref={menuRef}
              >
                <Image
                  src="/assets/icons/icon-close.svg"
                  width={14}
                  height={15}
                  alt="Close"
                  onClick={() => setMenuIsOpen(false)}
                />
                <div className="flex gap-y-6 flex-col mt-6">
                  <p className="text-dark-blue font-semibold text-xl">
                    Collections
                  </p>
                  <p className="text-dark-blue font-semibold text-xl">Men</p>
                  <p className="text-dark-blue font-semibold text-xl">Women</p>
                  <p className="text-dark-blue font-semibold text-xl">About</p>
                  <p className="text-dark-blue font-semibold text-xl">
                    Contact
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="hidden lg:block relative">
        <div className="flex items-center justify-between mt-10">
          <div className="flex gap-x-16">
            <div className="mb-10">
              <Image
                src="/assets/images/logo.svg"
                width={138}
                height={20}
                alt="Logo"
              />
            </div>
            <div className="flex gap-x-8 text-neutral-grayishBlue">
              <p className="hover:border-b-4 border-primary-orange pb-8 cursor-pointer">
                Collections
              </p>
              <p className="hover:border-b-4 border-primary-orange pb-8 cursor-pointer">
                Men
              </p>
              <p className="hover:border-b-4 border-primary-orange pb-8 cursor-pointer">
                Women
              </p>
              <p className="hover:border-b-4 border-primary-orange pb-8 cursor-pointer">
                About
              </p>
              <p className="hover:border-b-4 border-primary-orange pb-8 cursor-pointer">
                Contact
              </p>
            </div>
          </div>

          <div className="flex items-center gap-x-12 mb-10">
            <div ref={cartModalRef}>
              <AnimatePresence>
                {cartModalIsOpen && (
                  <CartModal
                    cartNumber={cartNumber}
                    setCartModalIsOpen={setCartModalIsOpen}
                    setCartNumber={setCartNumber}
                  />
                )}
              </AnimatePresence>
              <div className="relative flex">
                <Image
                  src="/assets/icons/icon-cart.svg"
                  width={22}
                  height={20}
                  alt="Cart"
                  onClick={() => setCartModalIsOpen(!cartModalIsOpen)}
                  className="cursor-pointer"
                />

                {cartNumber ? (
                  <div className="absolute bg-primary-orange text-white px-2 text-xs rounded-xl -top-2 -right-2">
                    {cartNumber}
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="hover:border-2 flex rounded-full border-primary-orange w-[54px] h-[54px] items-center justify-center cursor-pointer">
              <Image
                src="/assets/images/image-avatar.png"
                width={50}
                height={50}
                alt="Avatar"
              />
            </div>
          </div>
        </div>
        <hr className="absolute w-full bottom-[13px]" />
      </div>
    </>
  );
};

export default Header;

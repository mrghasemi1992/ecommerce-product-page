import Image from "next/image";
import { useRef, useState } from "react";
import { useClickAway } from "react-use";

import CartModal from "./CartModal";

const Header = ({ cartNumber, setCartNumber }) => {
  const [cartModalIsOpen, setCartModalIsOpen] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const menuRef = useRef(null);

  useClickAway(menuRef, () => setMenuIsOpen(false));

  return (
    <div className="bg-white p-4 flex justify-between items-center relative">
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
        <Image
          src="/assets/images/image-avatar.png"
          width={30}
          height={30}
          alt="Avatar"
        />
      </div>

      {cartModalIsOpen && (
        <CartModal
          cartNumber={cartNumber}
          setCartModalIsOpen={setCartModalIsOpen}
          setCartNumber={setCartNumber}
        />
      )}

      {menuIsOpen && (
        <div className="bg-black bg-opacity-40 fixed inset-0 z-10">
          <div className="bg-white w-2/3 h-full p-6" ref={menuRef}>
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
              <p className="text-dark-blue font-semibold text-xl">Contact</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

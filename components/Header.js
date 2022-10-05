import Image from "next/image";
import { useState } from "react";
import CartModal from "./CartModal";

const Header = ({ cartNumber }) => {
  const [cartModalIsOpen, setCartModalIsOpen] = useState(false);

  return (
    <div className="bg-white p-4 flex justify-between items-center relative">
      <div className="flex gap-x-4 items-center">
        <Image
          src="/assets/icons/icon-menu.svg"
          width={16}
          height={15}
          alt="Menu"
        />
        <Image
          src="/assets/images/logo.svg"
          width={138}
          height={20}
          alt="Logo"
        />
      </div>

      <div className="flex items-center gap-x-4">
        <div className="relative">
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

      {cartNumber ? (
        cartModalIsOpen && <CartModal cartNumber={cartNumber} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;

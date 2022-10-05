import Image from "next/image";
import { useState } from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";

export default function Home() {
  const [number, setNumber] = useState(0);
  const [cartNumber, setCartNumber] = useState(0);

  return (
    <div>
      <Header cartNumber={cartNumber} />
      <Slider />
      <section className="p-4 mb-16">
        <h2 className="text-primary-orange text-sm">SNEAKER COMPANY</h2>
        <h1 className="font-bold text-2xl my-3 text-neutral-darkBlue">
          Fall Limited Edition Sneakers
        </h1>
        <p className="text-neutral-darkGrayishBlue font-light mb-8">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they&#39;ll withstand
          everything the weather can offer.
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-4">
            <p className="font-bold text-2xl text-neutral-darkBlue">$125.00</p>
            <div className="bg-primary-paleOrange text-primary-orange px-2 py-0.5 rounded-lg">
              50%
            </div>
          </div>
          <del className="text-neutral-grayishBlue">$250</del>
        </div>

        <div className="flex items-center bg-neutral-lightGrayishBlue h-14 rounded-lg justify-between px-6 mt-6 mb-3">
          <Image
            src="/assets/icons/icon-minus.svg"
            width={12}
            height={4}
            alt="Minus"
            onClick={() => number > 0 && setNumber(number - 1)}
          />
          <div className="font-bold">{number}</div>
          <Image
            src="/assets/icons/icon-plus.svg"
            width={12}
            height={12}
            alt="Plus"
            onClick={() => setNumber(number + 1)}
          />
        </div>
        <button
          className="flex items-center justify-center gap-x-2 bg-primary-orange h-14 w-full rounded-lg text-white"
          onClick={() => setCartNumber(number)}
        >
          <Image
            src="/assets/icons/icon-cart-white.svg"
            width={22}
            height={20}
            alt="Cart"
          />
          <p>Add to cart</p>
        </button>
      </section>
    </div>
  );
}

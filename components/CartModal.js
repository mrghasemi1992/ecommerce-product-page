import Image from "next/image";

const CartModal = ({ cartNumber }) => {
  return (
    <div className="bg-white absolute rounded-lg z-10 top-20 left-0 w-full">
      <h1 className="p-4">Cart</h1>
      <hr />
      <div className="p-4 flex items-center justify-between">
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
        />
      </div>
    </div>
  );
};

export default CartModal;

import Image from "next/image";
import { useState } from "react";
import main from "../Assets/main-logo.png";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineClose,
} from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { FaCaretDown } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
    console.log("gggs");
  };

  return (
    <>
      <section className="h-20 w-100 bg-red-50 px-10 flex items-center justify-between max-[380]:px-5 z-10">
        <div>
          <Image src={main} alt="" width={100} height={100} />
        </div>
        <ul className="flex justify-evenly font-custom gap-12 text-lg font-serif text-bold gap-md-5 max-lg:hidden">
          <li className="flex items-center">
            HOME
            <FaCaretDown />
          </li>
          <li className="flex items-center">
            SHOP
            <FaCaretDown />
          </li>
          <li className="flex">CONTACT</li>
        </ul>
        <div className="hidden max-lg:block">
          <RxHamburgerMenu size={25} onClick={handleClick} />
        </div>
        <ul className="flex justify-between font-sans gap-10 max-md:hidden">
          <li className="flex text-lg">
            <AiOutlineHeart size={25} />
            (0)
          </li>
          <li className="flex text-lg">
            <AiOutlineShoppingCart size={25} />
            (0)
          </li>
          <li className="flex text-lg">
            <AiOutlineUser size={25} />
          </li>
          <li className="flex text">
            <FiSearch size={22} />
          </li>
        </ul>

        {menu && (
        <div className="flex bars transition-duration-500 ease-in-out z-10 ">
          <ul className="types bg-red-200 top-0 absolute  h-screen right-0 w-10/12 pt-7 pl-20 flex-column max-sm:w-screen max-sm:pl-10">
            <ul className="flex justify-between pb-20 pt-0">
              <li className="text-2xl">MENU</li>
              <li className="pr-10">
                <AiOutlineClose size={25} onClick={handleClick} />
              </li>
            </ul>
            <li className="flex items-center text-lg">
              HOME
              <FaCaretDown />
            </li>
            <li className="flex text-lg items-center  py-5 ">
              SHOP
              <FaCaretDown />
            </li>
            <li className="flex text-lg  py-5">CONTACT</li>
            <li className="flex text-lg  py-5">
              WISHLIST
              <AiOutlineHeart size={25} />
              (0)
            </li>
            <li className="flex text-lg  py-5">
              ADD TO CART
              <AiOutlineShoppingCart size={25} />
              (0)
            </li>
            <li className="flex text-lg  py-5">
              PROFILE
              <AiOutlineUser size={25} />
            </li>
            <li className="flex text-lg  py-5">
              SEARCH
              <FiSearch size={22} />
            </li>
          </ul>
        </div>
      )}
      
      </section>
      
    </>
  );
}

export default Navbar;

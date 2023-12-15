import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { TiArrowBack } from "react-icons/ti";
import Cart from "./Cart";
import { useStateContext } from "../lib/context";
import { useUser } from "@auth0/nextjs-auth0";
import User from "./User";
import styled from "styled-components";
import { useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import logo from "../img/fishbowl.png";
import Image from "next/image";

const { AnimatePresence, motion } = require("framer-motion");

export default function Nav() {
  const [menuStatus, setMenuStatus] = useState(true);
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const { user, error, isLoading } = useUser();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  let activeStyle = {
    color: "#A68D60",
    fontSize: "4rem",
    borderBottom: "0.5rem solid #A68D60",
    paddingLeft: "0.4em",
    transition: "0.5s ease",
  };

  return (
    <div
      className="
            flex 
            justify-between
            bg-gradient-to-r from-transparent via-gray-800 to-transparent
            fixed
            z-10
            top-0
            inset-x-0
            h-16">
      <button
        className="text-2xl border-none text-center font-black m-4 text-amber-600
                hover:text-gray-400"
        onClick={() => setMenuStatus(!menuStatus)}>
        {(menuStatus && <BsThreeDotsVertical />) || <RiCloseFill />}
      </button>
      <h1 className="h-12 w-12 my-auto md:w-16 md:h-16">
        <Link href="/" id="logo">
          <Image src={logo} alt="logo" layout="responsive" />
        </Link>
      </h1>
      <div
        className={
          "z-20 cursor-pointer relative flex flex-col align-middle justify-center mx-6 my-3"
        }
        onClick={() => setShowCart(true)}>
        {totalQuantities > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={
              "bg-red-600 text-white w-4 h-4 flex justify-center align-middle rounded-full absolute text-xs right-[-10%] top-[-20%] pointer-events-none"
            }>
            {totalQuantities}
          </motion.span>
        )}
        <FaShoppingCart className="text-xl" />
        <h3 className="text-sm font-light hover:text-amber-600">Cart</h3>
      </div>
      <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
      <StyledLinks
        disableInlineStyles
        className={`${
          menuStatus
            ? "hidden"
            : "flex w-96 h-full z-10 m-auto justify-center fixed top-16 bg-gradient-to-r from-gray-800 to-transparent"
        }`}>
        <ul className={"list-none py-8 flex flex-col min-w-[70%]"}>
          <li className="inline-flex justify-evenly">
            <TiArrowBack />
            <a href={"https://muimbaji.vercel.app/"}>Main Site</a>
          </li>
          <li>
            <User />
          </li>
        </ul>
      </StyledLinks>
    </div>
  );
}

//Styles
const StyledLinks = styled.div`
  li {
    color: #f2f2f2;
    text-decoration: none;
    font-size: 2rem;
    margin-bottom: 0.5rem;
    cursor: pointer;
    &:hover {
      color: #a68d60;
      font-size: 2.5rem;
      border-bottom: 0.2rem solid #a68d60;
      transition: 0.3s ease-in-out;
    }
  }
`;

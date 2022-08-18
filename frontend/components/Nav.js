import Link from 'next/link';
import { FaShoppingBag } from 'react-icons/fa';
import { NavStyles, NavItems } from '../styles/NavStyles';
import Cart from './Cart';
import { useStateContext } from '../lib/context';
import { useUser } from '@auth0/nextjs-auth0';
import User from "../components/User"

const { AnimatePresence, motion } = require("framer-motion");

export default function Nav() {
    const {showCart, setShowCart, totalQuantities} = useStateContext();
    const { user, error, isLoading } = useUser();
    console.log(user)
    
    return (
        <NavStyles>
            <Link href={"/"}>logo</Link>
            <NavItems>
                <User />
                <div onClick={() => setShowCart(true)}>
                    {totalQuantities > 0 && 
                    <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                    >{totalQuantities}</motion.span>
                    }
                    <FaShoppingBag />
                    <h3>Cart</h3>
                </div>
            </NavItems>
            <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
        </NavStyles>
    )
}
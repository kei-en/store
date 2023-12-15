import styled from "styled-components";

const { motion } = require("framer-motion");

export const CartWrapper = styled(motion.div)`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
  display: flex;
  justify-content: flex-end;
`;

export const CartStyle = styled(motion.div)`
  width: 100%;
  background: #f1f1f1;
  padding: 2rem 5rem;
  overflow-y: scroll;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 60%;
  }
  @media screen and (min-width: 1200px) {
    width: 40%;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 3%;
  right: 4%;
  z-index: 10;
  display: block;
  svg {
    width: 2rem;
    height: 2rem;
  }
  :hover {
    svg {
      color: #a68d60;
    }
  }
`;

export const Cards = styled.div``;

export const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  background: white;
  padding: 2rem;
  margin: 2rem 0rem;
  img {
    width: 6rem;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const CardInfo = styled(motion.div)`
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

export const EmptyStyle = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  h1 {
    padding: 1rem;
  }
  svg {
    font-size: 8rem;
    color: var(--secondary);
  }
`;

export const CheckOut = styled(motion.div)`
  button {
    background: var(--primary);
    padding: 1rem 2rem;
    width: 100%;
    color: white;
    margin-top: 2rem;
    cursor: pointer;
  }
`;

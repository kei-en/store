import styled from 'styled-components';

const { motion } = require("framer-motion");

export const Wrapper = styled.div`
    margin: 3rem 10rem;
`;

export const Card = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    border-radius: 2rem;
    padding: 3rem 3rem;
    h2 {
        margin: 0.5rem;
    }
    button {
        color: white;
        background: var(--primary);
        font-size: 1.2rem;
        padding: 1rem 2rem;
        cursor: pointer;
    }
`;

export const Address = styled.div`
    font-size: 1rem;
    width: 100%;
    margin-right: 1rem;
`;

export const OrderInfo = styled.div`
    font-size: 1rem;
    width: 100%;
    div {
        padding-bottom: 1rem;
    }
`;

export const InfoWrapper = styled.div`
    display: flex;
    margin: 1rem 0rem;
`
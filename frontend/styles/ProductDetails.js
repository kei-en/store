import styled from "styled-components";

export const DetailsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5.5rem;
  margin-left: 10%;
  margin-right: 10%;
  background: #e8e8eb;
  padding: 1.5rem;
  border-radius: 1em;
  position: relative;
  img {
    width: 80%;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    img {
      width: 30%;
    }
  }
`;

export const ProductInfo = styled.div`
  text-align: center;
  h2 {
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;
  }
  h3 {
    font-weight: 500;
    text-decoration: underline;
  }
  button {
    font-size: 1rem;
    font-weight: medium;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    width: 40%;
    text-align: start;
  }
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0rem;
  button {
    background: transparent;
    border: none;
    display: flex;
    font-size: 1.5rem;
    padding: 0rem 0.5rem;
  }
  p {
    width: 1rem;
    text-align: center;
  }
  span {
    color: var(--primary);
  }
  svg {
    color: var(--secondary);
  }
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const Buy = styled.button`
  width: 100%;
  background: var(--primary);
  color: white;
  font-weight: 500;
`;

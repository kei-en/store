import styled from "styled-components";

export const ProductStyle = styled.div`
  padding: 2rem;
  img {
    cursor: pointer;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  h2 {
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;
  }
  p {
    font-weight: 500;
    text-decoration: underline;
  }
`;

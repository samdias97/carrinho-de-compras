import styled from "styled-components";

export const Container = styled.div`
  padding: 12px 20px;
`;

export const Card = styled.button`
  position: relative;
  height: 230px;
  border: none;
  border-radius: 16px;
  transition: transform 0.4s;
  background-color: transparent;
  box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 300px;
    height: 230px;
    object-fit: cover;
    border-radius: 16px;
  }

  div {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 10px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 0 0 16px 16px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;
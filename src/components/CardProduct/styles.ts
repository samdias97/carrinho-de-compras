import styled from "styled-components";

export const Container = styled.div`
  padding: 12px 20px;
`;

export const Card = styled.div`
  cursor: pointer;
  transition: transform 0.4s;

  &:hover {
    transform: scale(1.1);
  }

  ul {
    li {
      list-style-type: none;
      white-space: nowrap;

      img {
        width: 200px;
        height: 280px;
        object-fit: cover;
        border-radius: 16px;
      }
    }
  }
`;
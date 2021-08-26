import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--shape);
  box-shadow: 0px -4px 10px 2px rgba(0, 0, 0, 0.1);
  padding: 12px 20px;
`;

export const Contact = styled.div`
  ul {
    li {
      list-style-type: none;

      display: flex;
      align-items: center;
      justify-content: flex-start;

      svg {
        width: 20px;
        height: 20px;
        margin-right: 6px;
      }
    }
  }
`;
import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `};

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `};
`;

// in react we can set default prop like this now we set as default then in app we can remove vertical prop

Row.defaultProps = {
  type: "vertical",
};

export default Row;

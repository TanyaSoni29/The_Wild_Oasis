// import styled, { css } from "styled-components";
import styled, { css } from "styled-components";

// const Heading = styled.h1` we can do like this
//   font-size: ${ 10 > 5 ? "20px" : "5px"};
//   font-weight: 600;
// `;

// through some external variable and if we want want to do logic in external variable then it is compulsory to use css function
// const test = css`
//   text-align: center;
// `;

// const Heading = styled.h1`
//   font-size: "20px";
//   font-weight: 600;
//   ${test}
// `;

// now we want to pass prop so that we deal with conditionally setting styles now how we take prop type like below we can access the type prop and line height which not inside that curly bracket will be common for all and similarly we can write for other but if we use this type of conditional the html element is same in all three i.e h1 and which is not good for accessibility and seo so we want to use h2 then should use h2 and this is resolve the styled component library and hence we can specify which html element should render inside the html so we use prop ( as ) instead of type, type prop basically our own prop which we have define but as prop is defined by styled library

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `};

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `};

  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `};

  line-height: 1.4;
`;

export default Heading;

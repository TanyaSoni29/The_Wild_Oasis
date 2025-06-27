// import styled, { css } from "styled-components";

import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

// above we define the button variations and below we will receive them as prop below in this way we are applying the style on the basis of props

const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};
// after defining the default prop we can remove the values where it is primary and size medium

export default Button;

// to hover we Select button with that Aprecent sign and transient property define inside the global styles

// now how we can pass prop and css function in styled Component -- Suppose we have h1 styled component and now we want same styling will work for h2 h3 and other so what we do -- solution is as we are writing all the style inside the template literal so we can write js expression inside that literal in this we can use same style and we write expression on the basis of prop that we passed please check h1 example for better understanding or we can give separate defined style and give then inside h1 and when we do in other variable then we have to do not have syntax highlighting so for that we can use css function imported from styled component

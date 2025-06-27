import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

// const H1 = styled.h1`
//   font-size: 30px;
//   font-weight: 600;
// `;
// const Button = styled.button`
//   font-size: 4rem;
//   background-color: var(--color-brand-600);
//   border: none;
//   color: var(--color-brand-50);
//   padding: 1.2rem 1.6rem;
//   border-radius: var(--border-radius-sm);
//   box-shadow: var(--shadow-sm);
//   cursor: pointer;
// `; this is moved to Button component

// const Input = styled.input`
//   border-radius: var(--border-radius-sm);
//   border: 1px solid var(--color-grey-300);
//   background-color: var(--color-grey-0);
//   padding: 0.8rem 1.2rem;
//   box-shadow: var(--shadow-sm);

// `; this also move to the Input component H1 and Styled just used in this page so can keep them here or we can make separate file AppStyles.jsx
const StyledApp = styled.div`
  /* background-color: orangered; */
  padding: 20px;
`;
// in this way the styled components are used the best part of this css is it is not applied to this component it will not applied to other component means it will not affect the global css no collisions between global css and all for the autocompletion of such style we need install a vscode extension i.e vscode-styled-components

// these styled component accept all event handler as in html or jsx element can receives and we also reuse them and we worked separately

// now how we styled the App component as it is itself a component so we have to style the div so the convention is we have to start with Styled keyword then that component name and in place of div we want main then we can change that div with main html element

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            {/* <H1>Hello World</H1> */}
            {/* <Heading type="h1">Hello World</Heading> */}
            <Heading as="h1">Hello World</Heading>
            <div>
              <Heading as="h2">Check In and Out</Heading>
              {/* <Button
                variation="primary"
                size="medium"
                onClick={() => alert("Check In")}
              >
                Check In
              </Button> */}
              <Button onClick={() => alert("Check In")}>Check In</Button>
              <Button
                variation="secondary"
                size="small"
                onClick={() => alert("Check Out")}
              >
                Check Out
              </Button>
            </div>
          </Row>
          <Row>
            <form>
              <Heading as="h3">Form</Heading>

              <Input type="number" placeholder="Number of guests" />
              <Input type="number" placeholder="Number of guests" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;

// tech stack we will going to use in this project - react-router , styled components for styling and react query for remote state and react hook form these are new and all remaining are same

// we can use the global variables like this which are define in GlobalStyles and also styled component also provide it's own way to provide these variable to entire application using styled component themes

// with the use of themes we can also inject the design token like in global styles in our application and for learning themes using way you can visit the docs of styled components <ThemeProvider theme={theme} />

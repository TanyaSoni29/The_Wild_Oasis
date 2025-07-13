import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import styled from "styled-components";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate(); // navigate function is allow call inside the some function not in the top level of the component
  // 1. load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // 2. if there is not authenticated user , redirect to the login page
  //   if (!isAuthenticated) navigate("/login"); that's why this is not6 correct we have to call inside some function so for that we will use useEffect
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);

  // 3. while loading show spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  // 4. if there is authenticated user then render the App
  if (isAuthenticated) return children;
}

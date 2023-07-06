import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";

function LandingPage() {
  return (
    <Landing>
      <NavBar />
    </Landing>
  );
}
const Landing = styled.div`
  max-width: 100%;
  max-height: 100vh;
`;

export default LandingPage;

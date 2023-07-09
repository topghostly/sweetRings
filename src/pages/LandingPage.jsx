import React from "react";
import styled from "styled-components";
// import background from "../assets/images/background.png";
import NavBar from "../components/NavBar";

function LandingPage() {
  return (
    <Landing>
      <NavBar />
      <div className="large--text">
        <div className="text-l">
          <h1>D</h1>
        </div>
        <div className="text-l">
          <h1>O</h1>
        </div>
        <div className="text-l">
          <h1>U</h1>
        </div>
        <div className="text-l">
          <h1>G</h1>
        </div>
        <div className="text-l">
          <h1>H</h1>
        </div>
        <div className="text-l">
          <h1>N</h1>
        </div>
        <div className="text-l">
          <h1>U</h1>
        </div>
        <div className="text-l">
          <h1>T</h1>
        </div>
      </div>
      <CircleLink>
        <p>Virtual Doughnut</p>
      </CircleLink>
    </Landing>
  );
}
const Landing = styled.div`
  max-width: 100%;
  height: 100vh;
  background-color: #f09f9f;
  .large--text {
    width: 80%;
    height: 80vh;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const CircleLink = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #392755;
  p {
    margin: 0px;
  }
`;
export default LandingPage;

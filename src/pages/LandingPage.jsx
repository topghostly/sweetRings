import React, { useEffect } from "react";
import styled from "styled-components";
// import background from "../assets/images/background.png";
import NavBar from "../components/NavBar";
import gsap from "gsap";
import Drag from "../components/util/Drag";

function LandingPage() {
  useEffect(() => {
    gsap.set(".text-l", {
      scale: 0,
    });
    gsap.to(".text-l", {
      scale: 1,
      stagger: 0.3,
    });
  });
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
          <Drag
            theStyle={{
              padding: "10px",
              position: "relative",
            }}
          >
            <h1>U</h1>
          </Drag>
        </div>
        <div className="text-l">
          <h1>T</h1>
        </div>
      </div>
      <Drag
        theStyle={{
          padding: "25px",
          position: "absolute",
          bottom: "30px",
          right: "30px",
        }}
      >
        <CircleLink>
          <p>Virtual Doughnut 🍩</p>
        </CircleLink>
      </Drag>
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
  width: 170px;
  height: 170px;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  background-color: #392755;
  cursor: pointer;
  p {
    margin: 0px;
    font-family: "GreatVibes-Regular";
    font-size: 20px;
    width: 100px;
    color: white;
  }
`;
export default LandingPage;

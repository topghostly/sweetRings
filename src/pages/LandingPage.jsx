import { useEffect } from "react";
import styled from "styled-components";
import background from "../assets/images/background.jpg";
import NavBar from "../components/NavBar";
import gsap from "gsap";
import Drag from "../components/util/Drag";
import NewAnim from "../components/NewAnim";

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
    <Landing background={background}>
      <NewAnim />
      <div className="backdrop"></div>
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
      <Drag
        theStyle={{
          width: "100px",
          height: "100px",
          position: "absolute",
          top: "60px",
          right: "60px",
          borderRadius: "50%",
        }}
      >
        <p>My name is Tope</p>
      </Drag>
      <Drag
        theStyle={{
          width: "140px",
          height: "140px",
          position: "absolute",
          bottom: "60px",
          right: "60px",
          borderRadius: "50%",
        }}
      >
        <CircleLink>
          <p>🍩</p>
        </CircleLink>
      </Drag>
    </Landing>
  );
}
const Landing = styled.div`
  max-width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  .backdrop {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #2322226d;
    top: 0;
    left: 0;
  }
  .large--text {
    width: 80%;
    height: 100vh;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .text-l {
      h1 {
        font-family: "Themadi";
        color: white;
        font-size: 14em;
        margin: 0px;
        font-weight: lighter;
      }
    }
  }
`;
const CircleLink = styled.div`
  width: 140px;
  height: 140px;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  // background-color: #d6b55c;
  cursor: pointer;
  p {
    margin: 0px;
    font-family: "GreatVibes-Regular";
    text-align: center;
    font-size: 47px;
    width: 100px;
    color: white;
  }
`;
export default LandingPage;

import React, { useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";

function Drag({ children, theStyle }) {
  const mouselocation = () => {
    console.log("Mouse is moving");
    gsap.to(".children-div", {
      y: 25,
      transition: 0.06,
    });
  };
  const getMouseLocation = () => {
    console.log("The Mouse is inside");
    addEventListener("mousemove", mouselocation);
  };
  const backToCenter = () => {
    console.log("Back to center");
    removeEventListener("mousemove", mouselocation);
    gsap.to(".children-div", {
      y: 0,
      transition: 0.06,
    });
  };

  addEventListener("mousemove", () => {
    console.log(pageXOffset);
  });

  useEffect(() => {});
  return (
    <Body
      onMouseEnter={getMouseLocation}
      onMouseLeave={backToCenter}
      theStyle={theStyle}
    >
      <div className="children-div">{children}</div>
    </Body>
  );
}

const Body = styled.div`
  background-color: red;
  padding: ${(props) => props.theStyle.padding};
  width: fit-content;
  height: fit-content;
  position: ${(props) => props.theStyle.position};
  bottom: ${(props) => props.theStyle.bottom};
  right: ${(props) => props.theStyle.right};
  top: ${(props) => props.theStyle.top};
  left: ${(props) => props.theStyle.left};

  .children-div {
    width: fit-content;
    height: fit-content;
  }
`;
export default Drag;

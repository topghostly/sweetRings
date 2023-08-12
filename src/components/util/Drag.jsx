import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";

function Drag({ children, theStyle }) {
  const ref = useRef(null);
  const childrenRef = useRef(null);
  const mouseLocation = (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const { top, left, bottom, right } = ref.current.getBoundingClientRect();
    let targetHeight = bottom - top;
    let targetWidth = right - left;

    targetHeight = targetHeight / 2;
    targetWidth = targetWidth / 2;

    let x = left - mouseX;
    let y = top - mouseY;

    x = -x - targetWidth;
    y = -y - targetHeight;

    console.log(x, y);
    return { x, y };
  };

  const handleAnimation = (event) => {
    let { x, y } = mouseLocation(event);
    gsap.to(".children-div", {
      y: y,
      x: x,
      transition: 0.09,
    });
  };
  const mouseEnter = () => {
    addEventListener("mousemove", handleAnimation);
  };
  const mouseLeave = () => {
    removeEventListener("mousemove", handleAnimation);
    gsap.to(".children-div", {
      y: 0,
      x: 0,
      transition: 0.09,
    });
  };

  useEffect(() => {
    removeEventListener("mousemove", handleAnimation);
  });
  return (
    <Body
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      ref={ref}
      theStyle={theStyle}
    >
      <div className="children-div" ref={childrenRef}>
        {children}
      </div>
    </Body>
  );
}

const Body = styled.div`
  width: fit-content;
  height: fit-content;
  position: ${(props) => props.theStyle.position};
  bottom: ${(props) => props.theStyle.bottom};
  right: ${(props) => props.theStyle.right};
  top: ${(props) => props.theStyle.top};
  left: ${(props) => props.theStyle.left};
  border-radius: ${(props) => props.theStyle.borderRadius};
  cursor: pointer;

  .children-div {
    width: fit-content;
    height: fit-content;
    pointer-events: none;
  }
`;
export default Drag;

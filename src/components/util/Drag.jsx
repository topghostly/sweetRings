import { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";

function Drag({ children, theStyle }) {
  const ref = useRef(null);


  const handleAnimation = (event) => {
    // let { x, y } = mouseLocation(event);
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const { top, left, bottom, right } = ref.current.getBoundingClientRect();

    const targetHeight = (bottom - top) / 2;
    const targetWidth = (right - left) / 2;

    const x = -left + mouseX - targetWidth;
    const y = -top + mouseY - targetHeight;

    gsap.to(".children-div", {
      y: y,
      x: x,
      transition: 0.08,
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
      transition: 0.08,
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
      <div className="children-div">{children}</div>
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

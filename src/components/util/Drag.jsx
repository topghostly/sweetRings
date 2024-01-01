import { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import PropTypes from "prop-types";

function Drag({ children, theStyle }) {
  const ref = useRef(null);
  const objectRef = useRef(null);

  const handleAnimation = (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const { top, left, bottom, right } = ref.current.getBoundingClientRect();

    const targetHeight = (bottom - top) / 2;
    const targetWidth = (right - left) / 2;

    const x = -left + mouseX - targetWidth;
    const y = -top + mouseY - targetHeight;

    gsap.to(ref.current, {
      y: y,
      x: x,
      transition: 0.1,
    });
    gsap.to(objectRef.current, {
      y: y / 1.6,
      x: x / 1.6,
      transition: 0.1,
    });
  };

  const mouseEnter = () => {
    addEventListener("mousemove", handleAnimation);
  };

  const mouseLeave = () => {
    removeEventListener("mousemove", handleAnimation);
    gsap.to(ref.current, {
      y: 0,
      x: 0,
      transition: 0.1,
    });
    gsap.to(objectRef.current, {
      y: 0,
      x: 0,
      transition: 0.1,
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
      className="bodyY"
    >
      <div className="children-div" ref={objectRef}>
        {children}
      </div>
    </Body>
  );
}

Drag.propTypes = {
  children: PropTypes.node.isRequired,
  theStyle: PropTypes.object,
};

export default Drag;

const Body = styled.div`
  position: ${(props) => props.theStyle.position};
  width: ${(props) => props.theStyle.width};
  height: ${(props) => props.theStyle.height};
  bottom: ${(props) => props.theStyle.bottom};
  right: ${(props) => props.theStyle.right};
  top: ${(props) => props.theStyle.top};
  left: ${(props) => props.theStyle.left};
  border-radius: ${(props) => props.theStyle.borderRadius};
  display: grid;
  place-content: center;
  background-color: red;
  cursor: pointer;

  .children-div {
    width: fit-content;
    height: fit-content;
    pointer-events: none;
  }
`;

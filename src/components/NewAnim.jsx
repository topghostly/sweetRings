import { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
function NewAnim() {
  const ovalRef = useRef(null);
  const ovalRefTwo = useRef(null);
  const viewPortRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(viewPortRef.current, {
      top: "0vh",
      delay: 2,
      duration: 1.2,
    })
      .to(
        ovalRef.current,
        {
          transform: "scaleY(.01)",
          delay: 2,
          duration: 1,
        },
        "0"
      )
      .to(viewPortRef.current, {
        top: "-130vh",
        duration: 1.5,
      })
      .to(
        ovalRefTwo.current,
        {
          transform: "scaleY(.01)",
          duration: 1,
          delay: 3,
        },
        "0"
      );
  });
  return (
    <ViewPort ref={viewPortRef}>
      <Oval ref={ovalRef} />
      <Box />
      <OvalTwo ref={ovalRefTwo} />
    </ViewPort>
  );
}

const ViewPort = styled.div`
  position: absolute;
  width: 110vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 20;
  top: 130vh;
`;

const Oval = styled.div`
  position: absolute;
  width: 110vw;
  height: 38vw;
  border-radius: 50%;
  background-color: #111b29;
  z-index: 20;
  top: -30vh;
`;
const OvalTwo = styled.div`
  position: absolute;
  width: 110vw;
  height: 38vw;
  border-radius: 50%;
  background-color: #111b29;
  z-index: 20;
  bottom: -30vh;
`;

const Box = styled.div`
  /* position: absolute; */
  width: 110vw;
  height: 100vh;
  background-color: #111b29;
  z-index: 22;
`;
export default NewAnim;

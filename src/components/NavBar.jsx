import React from "react";
import Styled from "styled-components";

function NavBar() {
  return (
    <Nav>
      <Logo>Sweet Rings</Logo>
      <CTA>Make your Doughnut</CTA>
    </Nav>
  );
}
const Nav = Styled.div`
    max-width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 60px;
`;
const Logo = Styled.h1`
    
`;
const CTA = Styled.div`
    background-color: brown;
    width: 200px;
    height: 40px;
    display: grid;
    place-items:center;
    color: white;
    cursor: pointer;
`;
export default NavBar;

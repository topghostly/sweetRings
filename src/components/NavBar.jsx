import React from "react";
import styled from "styled-components";
import LogoIMG from "../assets/images/sRlogo.png";

function NavBar() {
  return (
    <Nav>
      <div className="links">
        <Links>Our menu</Links>
        <Links>Services</Links>
        <Links>Contact us</Links>
      </div>
      <Logo src={LogoIMG} />
      <CTA>Make your Doughnut</CTA>
    </Nav>
  );
}
const Nav = styled.div`
  max-width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 80px;

  .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
  }
`;
const Logo = styled.img`
  width: 60px;
`;
const CTA = styled.div`
  width: 200px;
  height: 40px;
  display: grid;
  place-items: center;
  color: #202020;
  cursor: pointer;
`;
const Links = styled.p`
  color: #202020;
`;
export default NavBar;
// 5.3.8

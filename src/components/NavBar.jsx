import React from "react";
import styled from "styled-components";
import LogoIMG from "../assets/images/logoWhite-02.png";

function NavBar() {
  return (
    <Nav>
      <div className="links">
        <p className="link">Our Menu</p>
        <p className="link">Services</p>
        <p className="link">Contact Us</p>
      </div>
      <Logo src={LogoIMG} />
      <CTA>Make your Doughnut</CTA>
    </Nav>
  );
}
const Nav = styled.div`
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 999;
  position: fixed;

  .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    transition: all 0.3s ease-in-out;
    :hover {
      color: #b4870d;
      transition: all 0.3s ease-in-out;
    }
    p {
      color: white;
      font-family: "GreatVibes-Regular";
      font-size: 25px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
    }
  }
`;
const Logo = styled.img`
  width: 70px;
`;
const CTA = styled.div`
  width: 200px;
  height: 40px;
  display: grid;
  place-items: center;
  font-family: "GreatVibes-Regular";
  color: white;
  font-size: 25px;
  cursor: pointer;
`;
export default NavBar;

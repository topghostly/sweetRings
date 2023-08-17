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
    transition: all 0.1s ease-in-out;
    :hover {
      color: #f8d983;
      transition: all 0.1s ease-in-out;
    }
    p {
      color: white;
      font-family: "Poppins-Regular";
      font-size: 13px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
    }
  }
`;
const Logo = styled.img`
  width: 60px;
`;
const CTA = styled.div`
  padding: 10px 20px;
  font-family: "Poppins-Regular";
  color: white;
  font-size: 13px;
  border-radius: 7px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background-color: transparent;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-color: pink;
    width: 100%;
    height: 100%;
  }
`;
export default NavBar;

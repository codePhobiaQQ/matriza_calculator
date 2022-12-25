import React, { ReactNode } from "react";
import ArrowLeft from "../components/common/svg/ArrowLeft";
import Logo from "../components/common/svg/Logo";
import CircleTop from "../components/common/svg/CircleTop";
import LogoFooter from "../components/common/svg/LogoFooter";

interface IHeader {
  children?: ReactNode;
}

const Header = ({ children }: IHeader) => {
  return (
    <>
      <header className={"header"}>
        <CircleTop />
        <div className="container">
          <div className="headerInner">
            <a className={"BackBtn"} href="#">
              <ArrowLeft />
              <span>На главную</span>
            </a>

            <Logo />
          </div>
        </div>
      </header>
      {children}
    </>
  );
};

export default Header;

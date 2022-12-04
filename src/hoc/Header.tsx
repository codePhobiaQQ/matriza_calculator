import React, { ReactNode } from "react";
import ArrowLeft from "../components/common/svg/ArrowLeft";
import Logo from "../components/common/svg/Logo";
import CircleTop from "../components/common/svg/CircleTop";
import LogoFooter from "../components/common/svg/LogoFooter";

interface IHeader {
  children: ReactNode;
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
      <footer className={"footer"}>
        <div className="container">
          <div className="footerInner">
            <LogoFooter />
            <ul className="navigation footerList">
              <span>Навигация:</span>
              <li>Матрица онлайн</li>
              <li>Совместимость</li>
              <li>Матрица здоровья</li>
            </ul>

            <ul className="navigation footerList">
              <span>Контакты:</span>
              <li>
                <a href="#">Вконтакте</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Telegram</a>
              </li>
            </ul>

            <div></div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Header;

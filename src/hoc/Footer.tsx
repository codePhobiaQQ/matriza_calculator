import React from 'react';
import {useDispatch} from "react-redux"
import LogoFooter from "../components/common/svg/LogoFooter";
import { activeTabType, appSlice } from "./../redux/reducers/AppSlice"

const Footer = () => {
  const { changeActiveTab } = appSlice.actions
  const dispatch = useDispatch()

  const linkHandler = (numb: activeTabType) => {
    dispatch(changeActiveTab(numb))
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  return (
    <footer className={"footer"}>
      <div className="container">
        <div className="footerInner">
          <LogoFooter/>
          <ul className="navigation footerList">
            <span>Навигация:</span>
            <li onClick={() => linkHandler(1)}>Личная матрица</li>
            <li onClick={() => linkHandler(2)}>Матрица совместимости</li>
            <li onClick={() => linkHandler(3)}>Матрица здоровья</li>
          </ul>

          <ul className="navigation footerList">
            <span>Контакты:</span>
            <li>
              <a target={"_blank"} href="https://vk.com/club211106233">
                Вконтакте
              </a>
            </li>
            <li>
              <a
                target={"_blank"}
                href="https://instagram.com/krisbressel?igshid=YTY2NzY3YTc="
              >
                Instagram
              </a>
            </li>
            <li>
              <a target={"_blank"} href="https://t.me/kris_bressel">
                Telegram
              </a>
            </li>
          </ul>

          <div></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
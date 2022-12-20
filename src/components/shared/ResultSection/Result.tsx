import React from "react";
import { useAppSelector } from "../../../hooks/redux";
import Matrix from "../CalcMatrix/Matrix";
import LogoFooter from "../../common/svg/LogoFooter";
import CalcTable from "../CalcTable";

interface ResultI {
  activeTab: string;
}

const Result = ({ activeTab }: ResultI) => {
  const { showResult } = useAppSelector(
    (state) => state.app
  );

  return (
    <>
      {showResult && (<div className={`ResultSection`}>
        <div className="container">
          <div className="MapSection">
            <Matrix />
            <CalcTable />
          </div>
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
        </div>
      </div>)}
    </>
  );
};

export default Result;

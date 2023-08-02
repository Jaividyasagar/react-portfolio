import React from "react";
import Whatsapp from "../../assets/svg/whatsapp.svg";
const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <div className="footer__bg">
          <div className="footer__container container grid">
            <div>
              <h1 className="footer__title">Jai Vidyasagar R</h1>
              <span className="footer__subtitle">Full-Stack developer</span>
            </div>

            <ul className="footer__links">
              <li>
                <a href="#services" className="footer__link">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="footer__link">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="footer__link">
                  Contact
                </a>
              </li>
            </ul>

            <div className="footer__socials">
              <a
                href="https://www.linkedin.com/in/jaividyasagar/"
                target="_blank"
                className="footer__social"
              >
                <svg
                  className="footer__logo"
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 100 100"
                  viewBox="0 0 100 100"
                  id="linkedin"
                >
                  <path
                    fill="#0077b5"
                    d="M90.479,2.513c-14.611-0.041-68.502,0.028-80.958,0C5.645,2.513,2.5,5.562,2.5,9.317v81.381
                    c0,3.756,3.145,6.802,7.021,6.802h80.958c3.878,0,7.021-3.046,7.021-6.803V9.317C97.5,5.562,94.357,2.513,90.479,2.513z"
                  ></path>
                  <path
                    fill="#f1f1f1"
                    d="M53.453 82.005c0 0 0-23.878 0-23.879-.139-4.388 2.484-8.483 7.762-8.667 5.143 0 7.201 3.921 7.201 9.67v22.875h14.214V57.485c0-13.135-7.012-19.247-16.365-19.247-7.668 0-11.036 4.285-12.907 7.204l.095-6.2H39.239c.185 4.012-.001 42.763-.001 42.763L53.453 82.005zM31.37 63.461v-24.22H17.154v42.763h14.217C31.368 77.514 31.376 67.888 31.37 63.461zM24.265 33.404c4.956 0 8.042-3.284 8.042-7.387-.041-9.897-16.004-9.787-15.991-.001C16.305 30.151 19.476 33.455 24.265 33.404z"
                  ></path>
                </svg>
              </a>

              <a
                href="https://instagram.com/jaividyasagar"
                target="_blank"
                className="footer__social"
              >
                <svg
                  className="footer__logo"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  id="instagram"
                >
                  <linearGradient
                    id="a"
                    x1="1.464"
                    x2="14.536"
                    y1="14.536"
                    y2="1.464"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#FFC107"></stop>
                    <stop offset=".507" stopColor="#F44336"></stop>
                    <stop offset=".99" stopColor="#9C27B0"></stop>
                  </linearGradient>
                  <path
                    fill="url(#a)"
                    d="M11 0H5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm3.5 11c0 1.93-1.57 3.5-3.5 3.5H5c-1.93 0-3.5-1.57-3.5-3.5V5c0-1.93 1.57-3.5 3.5-3.5h6c1.93 0 3.5 1.57 3.5 3.5v6z"
                  ></path>
                  <linearGradient
                    id="b"
                    x1="5.172"
                    x2="10.828"
                    y1="10.828"
                    y2="5.172"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#FFC107"></stop>
                    <stop offset=".507" stopColor="#F44336"></stop>
                    <stop offset=".99" stopColor="#9C27B0"></stop>
                  </linearGradient>
                  <path
                    fill="url(#b)"
                    d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5A2.503 2.503 0 0 1 5.5 8c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.378-1.122 2.5-2.5 2.5z"
                  ></path>
                  <linearGradient
                    id="c"
                    x1="11.923"
                    x2="12.677"
                    y1="4.077"
                    y2="3.323"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#FFC107"></stop>
                    <stop offset=".507" stopColor="#F44336"></stop>
                    <stop offset=".99" stopColor="#9C27B0"></stop>
                  </linearGradient>
                  <circle cx="12.3" cy="3.7" r=".533" fill="url(#c)"></circle>
                </svg>
              </a>
              <a
                href="https://twitter.com/jaividyasagarr"
                target="_blank"
                className="footer__social"
              >
                <svg
                  className="footer__logo"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  id="twitter"
                >
                  <path
                    fill="#03A9F4"
                    d="M16 3.539a6.839 6.839 0 0 1-1.89.518 3.262 3.262 0 0 0 1.443-1.813 6.555 6.555 0 0 1-2.08.794 3.28 3.28 0 0 0-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 0 1-6.761-3.431 3.285 3.285 0 0 0 1.008 4.384A3.24 3.24 0 0 1 .64 6.578v.036a3.295 3.295 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.59 6.59 0 0 1-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 0 0 5.032 15c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 3.539z"
                  ></path>
                </svg>
              </a>
              <a
                href="https://wa.me/+919500442237?text=Hey Jai Vidyasagar R"
                target="_blank"
                className="footer__social"
              >
                <img src={Whatsapp} alt="" className="footer__logo" />
              </a>
            </div>
          </div>

          <p className="footer__copy">
            &#169; Jai Vidyasagar R. All rights reserved.
          </p>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;

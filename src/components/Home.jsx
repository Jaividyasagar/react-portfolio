import React from "react";
import Cover from "../../assets/img/covers/cover.jpg";
import LinkedIn from "../../assets/svg/linkedin.svg";
import LeetCode from "../../assets/svg/leetcode.svg";
import GitHub from "../../assets/svg/github.svg";
import Instagram from "../../assets/svg/instagram.svg";
import Whatsapp from "../../assets/svg/whatsapp.svg";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Home = () => {
  return (
    <React.Fragment>
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <div className="home__social">
              <a
                href="https://www.linkedin.com/in/jaividyasagar/"
                target="_blank"
                className="home__social-icon"
              >
                <img src={LinkedIn} width={20} alt="" />
              </a>
              <a
                href="https://leetcode.com/Jaividyasagar/"
                target="_blank"
                className="home__social-icon"
              >
                <img src={LeetCode} alt="" />
              </a>
              <a
                href="https://github.com/Jaividyasagar/"
                target="_blank"
                className="home__social-icon"
              >
                <img src={GitHub} alt="" />
              </a>
              <a
                href="https://instagram.com/jaividyasagar/"
                target="_blank"
                className="home__social-icon"
              >
                <img src={Instagram} alt="" />
              </a>

              <a
                href="https://wa.me/+919500442237?text=Hey Jai Vidyasagar R"
                target="_blank"
                className="home__social-icon"
              >
                <img src={Whatsapp} alt="" />
              </a>
            </div>

            <div className="home__img">
              <img className="home__blob-img" src={Cover} alt="" />
            </div>

            <div className="home__data">
              <h1 className="home__title">Hey, I'm Jai Vidyasagar R</h1>
              <h3 className="home__subtitle">
                Full Stack Developer | Programmer | <span>Designer</span>
              </h3>
              <p className="home__description">
                Experiencing in Full-Stack web design and development knowledge,
                and familiarity in Data Structures & Algorithms.
              </p>
              <a href="#contact" className="button button-flex">
                Contact Me
              </a>
            </div>
          </div>
          <div className="home__scroll">
            <a href="#about" className="home__scroll-button button--flex">
              <span className="home__scroll-name">Scroll down</span>
              <ArrowDownwardIcon />
            </a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;

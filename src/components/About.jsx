import React from "react";
import Resume from "../assets/pdf/Resume_Updated.pdf";
import AboutImg from "../assets/img/covers/about.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import { tech } from "../assets/data/data";

const About = () => {
  window.addEventListener("scroll", reveal);
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var revealTop = reveals[i].getBoundingClientRect().top;
      var revealPoint = 150;

      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add("active-reveal");
      } else {
        reveals[i].classList.remove("active-reveal");
      }
    }
  }
  return (
    <React.Fragment>
      <section className="about section" id="about" onScroll={reveal}>
        <div className="reveal">
          <h2 className="section__title">About Me</h2>
          <span className="section__subtitle">My Introduction</span>

          <div className="about__container container grid">
            <img src={AboutImg} alt="" className="about__img" />

            <div className="about__data">
              <p className="about__description">
                Working as a Salesforce Developer at Deloitte. Full-Stack developer and DSA Enthusiast with extensive knowledge
                and experience in working in web technologies and problem
                solving. Completed my Bachelors in Computer Science and
                Engineering  {" "}
                <a href="https://sastra.edu/" target="_block">
                  SASTRA University, Thanjavur.
                </a>
              </p>

              <div className="about__info">
                <div>
                  <span className="about__info-title">02+</span>
                  <span className="about__info-name">
                    Years of <br /> coding
                  </span>
                </div>

                <div>
                  <span className="about__info-title">10+</span>
                  <span className="about__info-name">
                    Completed
                    <br /> projects
                  </span>
                </div>

                <div>
                  <span className="about__info-title">{tech[tech.length - 1].percentage}+</span>
                  <span className="about__info-name">
                    Problems Solved <br /> on LeetCode
                    <a
                      className="leetcode-link-icon"
                      href="https://leetcode.com/Jaividyasagar"
                      target="_blank"
                      rel="noreferrer"
                      title="View my LeetCode profile"
                    >
                      🔗
                    </a>
                  </span>
                </div>
              </div>

              <div className="about__buttons">
                <a
                  download="Resume_Jai Vidyasagar"
                  href={Resume}
                  className="button button--flex"
                >
                  Download Resume
                  <DownloadIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default About;

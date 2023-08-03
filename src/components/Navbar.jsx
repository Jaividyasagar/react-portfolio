import React, { useState } from "react";
import "../../assets/css/styles.css";
import Resume from "../../assets/pdf/Resume.pdf";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [theme, setTheme] = useState(<DarkModeIcon />);
  const [navbar, setNavbar] = useState(false);
  function handleTheme() {
    if (document.body.classList.value === "dark-theme") {
      document.body.classList.value = "";
      setTheme(<DarkModeIcon />);
    } else {
      document.body.classList.value = "dark-theme";
      setTheme(<LightModeIcon />);
    }
  }

  const handleNavbar = () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.add("show-menu");
  }
  const handleNavbarClose = () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
  }
  const putShadowNavbar = () => {
    if (window.scrollY > 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }
  window.addEventListener("scroll", putShadowNavbar);
  const scrollActive = () => {
    const sections = document.querySelectorAll("section[id]");
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(".nav__menu a[href*=" + sectionId + "]")
          .classList.add("active-link");
      } else {
        document
          .querySelector(".nav__menu a[href*=" + sectionId + "]")
          .classList.remove("active-link");
      }
    });
  }
  window.addEventListener("scroll", scrollActive);
  return (
    <React.Fragment>
      <header className="header" id="header">
        <div id="navContainer" className={navbar ? "shadow-header" : ""}>
          <nav className="nav container">
            <a href="https://jaividyasagar.netlify.app/" className="nav__logo">
              Jai Vidyasagar R
            </a>

            <div className="nav__menu" id="nav-menu">
              <ul className="nav__list grid">
                <li className="nav__item">
                  <a href="#home" className="nav__link active-link">
                    <i className="uil uil-estate nav__icon"></i>Home
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#about" className="nav__link">
                    <i className="uil uil-user nav__icon"></i>About
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#skills" className="nav__link">
                    <i className="uil uil-file-alt nav__icon"></i>Skills
                  </a>
                </li>

                <li className="nav__item">
                  <a href={Resume} className="nav__link">
                    <i className="uil uil-file-alt nav__icon"></i>Resume
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#certifications" className="nav__link">
                    <i className="uil uil-briefcase nav__icon"></i>
                    Certifications
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#services" className="nav__link">
                    <i className="uil uil-scenery nav__icon"></i>Services
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#projects" className="nav__link">
                    <i className="uil uil-scenery nav__icon"></i>Projects
                  </a>
                </li>

                <li className="nav__item">
                  <a href="#contact" className="nav__link">
                    <i className="uil uil-message nav__icon"></i>Contact
                  </a>
                </li>
              </ul>
              <i
                className="uil uil-times nav__close"
                id="nav-close"
                onClick={handleNavbarClose}
              >
                <CloseIcon />
              </i>
            </div>

            <div className="nav__btns">
              <i
                className="uil uil-moon change-theme"
                id="theme-button"
                onClick={handleTheme}
              >
                {theme}
              </i>
              <div
                className="nav__toggle"
                id="nav-toggle"
                onClick={handleNavbar}
              >
                <i class="uil uil-apps"><MenuIcon/></i>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Navbar;

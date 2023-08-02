import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import DataObjectIcon from "@mui/icons-material/DataObject";
import CloseIcon from "@mui/icons-material/Close";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
const Services = () => {
  var modal1 = document.getElementsByClassName("modal1");
  var modal2 = document.getElementsByClassName("modal2");
  var modal3 = document.getElementsByClassName("modal3");

  const openModal1 = () => modal1[0].classList.add("active-modal");
  const closeModal1 = () => modal1[0].classList.remove("active-modal");

  const openModal2 = () => modal2[0].classList.add("active-modal");
  const closeModal2 = () => modal2[0].classList.remove("active-modal");

  const openModal3 = () => modal3[0].classList.add("active-modal");
  const closeModal3 = () => modal3[0].classList.remove("active-modal");
  return (
    <React.Fragment>
      <section className="services section" id="services">
        <div className="reveal">
          <h2 className="section__title">Services</h2>
          <span className="section__subtitle">What I offer</span>

          <div className="services__container container grid">
            <div className="services__content ">
              <div className="">
                <div>
                  <i className="uil uil-server services__icon ">
                    <StorageIcon />
                  </i>
                  <h3 className="services__title ">
                    Backend <br /> Developer
                  </h3>
                </div>
                <span
                  className="button button--flex button--small button--link services__button"
                  onClick={openModal1}
                >
                  View more
                  <i className="uil uil-arrow-right button__icon"></i>
                </span>
              </div>

              <div className="services__modal modal1" id="modal1">
                <div className="services__modal-content">
                  <h4 className="services__modal-title">
                    Backend <br /> Developer
                  </h4>
                  <i
                    className="uil uil-times services__modal-close"
                    onClick={closeModal1}
                  >
                    <CloseIcon />
                  </i>

                  <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon">
                        <RadioButtonCheckedIcon />
                      </i>
                      <p>I design and develop the server-side logic.</p>
                    </li>

                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon">
                        <RadioButtonCheckedIcon />
                      </i>
                      <p>I ensure scalability and reliability.</p>
                    </li>

                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon">
                        <RadioButtonCheckedIcon />
                      </i>
                      <p>I integrate with other systems.</p>
                    </li>

                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon">
                        <RadioButtonCheckedIcon />
                      </i>
                      <p>I debug and troubleshoot.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="services__content">
              <div className="">
                <div>
                  <i className="uil uil-arrow services__icon">
                    <CodeIcon />
                  </i>
                  <h3 className="services__title">
                    Frontend <br /> Developer
                  </h3>
                </div>
                <span
                  key={2}
                  className="button button--flex button--small button--link services__button"
                  onClick={openModal2}
                >
                  View more
                  <i className="uil uil-arrow-right button__icon"></i>
                </span>
              </div>
              <div className="services__modal modal2">
                <div className="services__modal-content">
                  <h4 className="services__modal-title">
                    Frontend <br /> Developer
                  </h4>
                  <i
                    key={2}
                    className="uil uil-times services__modal-close"
                    onClick={closeModal2}
                  >
                    <CloseIcon />
                  </i>

                  <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon">
                        <RadioButtonCheckedIcon />
                      </i>
                      <p>I develop the user interfaces.</p>
                    </li>

                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon">
                        <RadioButtonCheckedIcon />
                      </i>
                      <p>I implement interactivity.</p>
                    </li>

                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon">
                        <RadioButtonCheckedIcon />
                      </i>
                      <p>I ensure cross-platform compatibility.</p>
                    </li>

                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon">
                        <RadioButtonCheckedIcon />
                      </i>
                      <p>I optimize performance.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="services__content">
              <div className="">
                <div>
                  <i className="uil uil-brackets-curly services__icon">
                    <DataObjectIcon />
                  </i>
                  <h3 className="services__title">
                    Problem <br /> Solver
                  </h3>
                </div>
                <span
                  className="button button--flex button--small button--link services__button"
                  onClick={openModal3}
                >
                  View more
                  <i className="uil uil-arrow-right button__icon"></i>
                </span>
              </div>
              <div className="services__modal modal3">
                <div className="services__modal-content">
                  <h4 className="services__modal-title">
                    Problem <br /> Solver
                  </h4>
                  <i
                    className="uil uil-times services__modal-close"
                    onClick={closeModal3}
                  >
                    <CloseIcon />
                  </i>

                  <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon">
                        <RadioButtonCheckedIcon />
                      </i>
                      <p>I analyze problems.</p>
                    </li>

                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon">
                        <RadioButtonCheckedIcon />
                      </i>
                      <p>I design algorithms with various data structures.</p>
                    </li>

                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon">
                        <RadioButtonCheckedIcon />
                      </i>
                      <p>I implement and test solutions.</p>
                    </li>

                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon">
                        <RadioButtonCheckedIcon />
                      </i>
                      <p>I continuously optimize solutions.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Services;

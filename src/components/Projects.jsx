import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../assets/css/swipe.css";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { projects } from "../../assets/data/projects";
import Proj from "./Proj";

const Projects = () => {
  return (
    <React.Fragment>
      <center>
        <section className="portfolio section" id="projects">
          <div className="reveal">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">Most recent works</span>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {projects.map((p, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <Proj
                      key={idx}
                      thumbnail={p.thumbnail}
                      title={p.title}
                      desc={p.desc}
                      live={p.live}
                      github={p.github}
                    />
                    <br />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </section>
      </center>
    </React.Fragment>
  );
};
export default Projects;

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Proj = ({ thumbnail, title, desc, live, github }) => {
  return (
    <div className="portfolio__content grid swiper-slide">
      <a href={live} target="_blank" rel="noopener">
        <img src={thumbnail} alt="" className="portfolio__img" />
      </a>

      <div className="portfolio_">
        <h3 className="portfolio__title">{title}</h3>
        <p className="portfolio__description">{desc}</p>
        <a
          href={live}
          className="button button--flex button--small portfolio__button"
          target="_blank"
          rel="noopener"
        >
          Live Link
          {/* <i className="uil uil-arrow-right button__icon" style={{width:"100px", height:"10px"}}>
            <LaunchIcon />
          </i> */}
        </a>
        <a
          href={github}
          className="button button--flex button--small portfolio__button"
          target="_blank"
          rel="noopener"
        >
          GitHub
          {/* <i className="uil uil-github button__icon">
            <GitHubIcon />
          </i>  */}
        </a>
      </div>
    </div>
  );
};

export default Proj;

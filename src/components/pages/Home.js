import FloralMobile from "../../assets/images/brand/floral-mobile.png";
import FloralDesktop from "../../assets/images/brand/floral-desktop.png";
import LogoLanding from "../../assets/images/brand/logo-landing.svg";

// Home page
const Home = () => {
  return (
    <main className="site__main--height">
      <div className="home">
        <div className="home__inner">
          <picture>
            <source
              srcSet={FloralDesktop}
              media="(min-width: 992px)"
              alt="Brand floral"
              className="home__floral"
            />
            <source
              srcSet={FloralMobile}
              media="(min-width: 280px)"
              alt="Brand floral"
              className="home__floral"
            />
            <img
              src={FloralDesktop}
              alt="Brand floral"
              className="home__floral"
            />
          </picture>
          <div className="home__logo-container">
            <img src={LogoLanding} alt="Logo" className="home__logo" />
            <h1 className="home__title">Front End / Full Stack Developer</h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;

import LogoLanding from "../../assets/images/brand/logo-landing.svg";
import LogoLandingDescription from "../../assets/images/brand/logo-landing-description.svg";

// Home page
const Home = () => {
  return (
    <main className="site__main--height">
      <div className="home">
        <div className="home__inner">
          <img src={LogoLanding} alt="Logo" className="home__logo"/>
          <img src={LogoLandingDescription} alt="Logo Description" className="home__logo-description"/>
        </div>
      </div>
    </main>
  );
};

export default Home;

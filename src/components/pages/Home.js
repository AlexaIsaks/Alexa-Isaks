import LogoLanding from "../../assets/images/brand/logo-landing.svg";
// import LogoLandingDescription from "../../assets/images/brand/logo-landing-description.svg";

// Home page
const Home = () => {
  return (
    <main className="site__main--height">
      <div className="home">
        <div className="home__inner">
          <img src={LogoLanding} alt="Logo" className="home__logo"/>
          <h1 className="home__title">Front End / Full Stack Developer</h1>
        </div>
      </div>
    </main>
  );
};

export default Home;

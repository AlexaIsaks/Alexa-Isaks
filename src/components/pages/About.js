// About page
const About = () => {
  return (
    <main className="site__main">
      <div className="about">
         {/*Profile picture*/}
        <section className="about__profile-picture-container">
          <div className="about__profile-picture"></div>
        </section>

        {/*Profile details*/}
        <section className="about__information-container">
          <h1 className="about__title">_About</h1>
          <h2 className="about__subtitle">Hello, I'm so pleased you're here</h2>
          <p className="about__description">
            I have completed the Immersive Full Stack Web and Software
            Engineer bootcamp at HyperionDev. I am currently a Software Engineering Graduate Intern at HyperionDev.
          </p>
        </section>
      </div>
    </main>
  );
};

export default About;

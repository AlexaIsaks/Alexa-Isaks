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
            I have recently completed the Immersive Full Stack Web and Software
            Engineer bootcamp at HyperionDev. With a background in Science, my
            analytical skills have strengthened. These skills were essential in
            delivering quality science results and have been beneficial to me as
            a developer. I am a constant learner, dedicated to gaining knowledge
            and understanding my work. It is rewarding to provide solutions to
            different technical problems. My goal is to always produce work that
            gives the best web performance and user experience, while following
            the best coding practices.
          </p>
        </section>
      </div>
    </main>
  );
};

export default About;

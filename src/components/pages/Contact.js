import LinkedinIcon from "../../assets/images/icons/linkedin-icon.svg";

// Contact page
const Contact = () => {
  return (
    <main className="site__main--height">
      <div className="contact">
        <div className="contact-inner">
          <h1 className="contact__title">_Contact</h1>
          <h2 className="contact__subtitle">Let's Connect</h2>
          <a href="https://www.linkedin.com/in/alexa-isaks-9111701ba/" target="_blank" rel="noopener noreferrer" className="contact__link">
            <img src={LinkedinIcon} alt="LinkedIn icon" className="contact__linkedin-icon"/>
            <h3 className="contact__linkedin-title">LinkedIn</h3>           
          </a>
        </div>
      </div>
    </main>
  );
};

export default Contact;

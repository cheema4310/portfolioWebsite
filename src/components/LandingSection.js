import classes from "./LandingSection.module.css";

const LandingSection = () => {
  return (
    <main>
      <section id="Landing" className={classes.landingSection}>
        <div className={classes.landingWrapper}>
          <div className={classes.mainHeading}>
            <h1>Zubair Cheema.</h1>
          </div>
          <div className={classes.subHeading}>
            <h2>I build web that sells.</h2>
          </div>
          <div className={classes.para}>
            <p>
              I'm a Web Developer, specializing in building and
              &#40;occasionally designing&#41; exceptional UX and UI to attract
              right kinds of visitors. Websites promote you 24/7,No employee
              will do that.
            </p>
          </div>
          <div
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
            className={classes.sayHello}
          >
            <a href="mailto:cheema4310@gmail.com">Say Hello</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingSection;

import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className={classes.contactWrapper}>
        <h5 className={classes.contactHeading}>04. What's Next?</h5>
        <h1
          className={classes.contactBigHeading}
          data-aos="zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          Get In Touch
        </h1>
        <p>
          Although I'm not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I'll try my best to get back to you!
        </p>

        <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          className={classes.sayHelloBtn}
        >
          <a href="mailto:cheema4310@gmail.com"> Say Hello </a>
        </div>
      </div>
      <div className={classes.footer}>
        <h6>
          Designed by <a href="https://brittanychiang.com/">BrittanyChiang</a> &
          Built by <span>Zubair Cheema</span>
        </h6>
      </div>
    </section>
  );
};

export default Contact;

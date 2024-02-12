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
          I am actively seeking new opportunities and welcome any inquiries or
          job offers. Whether you have a potential opportunity or just want to
          connect, feel free to reach out.
        </p>

        <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          className={classes.sayHelloBtn}
        >
          <a href="mailto:cheema4310@gmail.com">Get Started</a>
        </div>
      </div>
      <div className={classes.footer}>
        <h6>
          Built by{" "}
          <a href="https://cv.buypits.com/">
            <span>Zubair Cheema</span>
          </a>
        </h6>
      </div>
    </section>
  );
};

export default Contact;

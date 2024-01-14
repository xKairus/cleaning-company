import classes from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section className={classes.about}>
      <h2 className={classes.about__title}>About Us</h2>
      <p className={classes.about__text}>
        CleanSpaces has been providing top-notch cleaning services since 2010.
        Our mission is to exceed customer expectations by delivering exceptional
        and reliable cleaning solutions.
      </p>
      <p className={classes.about__text}>
        We take pride in our dedicated team of experienced cleaners who are
        committed to ensuring a clean and sanitized space for our clients.
      </p>
    </section>
  );
}

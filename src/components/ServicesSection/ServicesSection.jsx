import classes from "./ServicesSection.module.css";

export default function ServicesSection() {
  return (
    <section className={classes.services}>
      <h2 className={classes.services__title}>Our Services</h2>
      <div className={classes.service}>
        <h3 className={classes.service__title}>Residential Cleaning</h3>
        <p className={classes.service__text}>
          Thorough cleaning for homes, apartments, and condos. We pay attention
          to every detail to make your living space shine.
        </p>
      </div>
      <div className={classes.service}>
        <h3 className={classes.service__title}>Commercial Cleaning</h3>
        <p className={classes.service__text}>
          Customized cleaning solutions for businesses. We understand the unique
          cleaning needs of commercial spaces.
        </p>
      </div>
      <div className={classes.service}>
        <h3 className={classes.service__title}>
          Carpet and Upholstery Cleaning
        </h3>
        <p className={classes.service__text}>
          Specialized services to keep your carpets and upholstery looking fresh
          and stain-free.
        </p>
      </div>
    </section>
  );
}

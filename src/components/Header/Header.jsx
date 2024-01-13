import classes from "./Header.module.css";

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.header__logo}>CleanSpaces</div>
      <ul className={classes.nav}>
        <li className={classes.nav}>Home</li>
        <li className={classes.nav}>About Us</li>
        <li className={classes.nav}>Services</li>
        <li className={classes.nav}>Careers</li>
        <li className={classes.nav}>Contact</li>
      </ul>
    </header>
  );
}

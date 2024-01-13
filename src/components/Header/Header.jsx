import classes from "./Header.module.css";

export default function Header({ activePage, onChangePage }) {
  console.log(`Active:  ${activePage}`);

  return (
    <header className={classes.header}>
      <div className={classes.header__logo}>CleanSpaces</div>
      <ul className={classes.nav}>
        <li
          className={
            activePage === "home"
              ? `${classes.nav__item} ${classes.nav__item_active}`
              : classes.nav__item
          }
          onClick={() => onChangePage("home")}
        >
          Home
        </li>
        <li
          className={
            activePage === "about"
              ? `${classes.nav__item} ${classes.nav__item_active}`
              : classes.nav__item
          }
          onClick={() => onChangePage("about")}
        >
          About Us
        </li>
        <li
          className={
            activePage === "services"
              ? `${classes.nav__item} ${classes.nav__item_active}`
              : classes.nav__item
          }
          onClick={() => onChangePage("services")}
        >
          Services
        </li>
        <li
          className={
            activePage === "careers"
              ? `${classes.nav__item} ${classes.nav__item_active}`
              : classes.nav__item
          }
          onClick={() => onChangePage("careers")}
        >
          Careers
        </li>
        <li
          className={
            activePage === "contact"
              ? `${classes.nav__item} ${classes.nav__item_active}`
              : classes.nav__item
          }
          onClick={() => onChangePage("contact")}
        >
          Contact
        </li>
      </ul>
    </header>
  );
}

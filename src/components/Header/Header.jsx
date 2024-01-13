import classes from "./Header.module.css";

export default function Header({ active, onChange }) {
  return (
    <header className={classes.header}>
      <div className={classes.header__logo}>CleanSpaces</div>
      <ul className={classes.nav}>
        <li
          className={classes.nav}
          isActive={active === "home"}
          onClick={() => onChange("home")}
        >
          Home
        </li>
        <li
          className={classes.nav}
          isActive={active === "about"}
          onClick={() => onChange("about")}
        >
          About Us
        </li>
        <li
          className={classes.nav}
          isActive={active === "services"}
          onClick={() => onChange("services")}
        >
          Services
        </li>
        <li
          className={classes.nav}
          isActive={active === "careers"}
          onClick={() => onChange("careers")}
        >
          Careers
        </li>
        <li
          className={classes.nav}
          isActive={active === "contact"}
          onClick={() => onChange("contact")}
        >
          Contact
        </li>
      </ul>
    </header>
  );
}

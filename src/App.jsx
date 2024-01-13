import { useState } from "react";
import Header from "./components/Header/Header";

// Pages
import HomePage from "./components/HomePage/HomePage";
import AboutUsPage from "./components/AboutUsPage/AboutUsPage";
import ServicesPage from "./components/ServicesPage/ServicesPage";
import CareersPage from "./components/CareersPage/CareersPage";
import ContactPage from "./components/ContactPage/ContactPage";

function App() {
  const [activePage, setActivePage] = useState("home");

  const changePage = (newPage) => {
    setActivePage(newPage);
  };

  return (
    <>
      <Header activePage={activePage} onChangePage={changePage} />

      {activePage === "home" && <HomePage />}
      {activePage === "about" && <AboutUsPage />}
      {activePage === "services" && <ServicesPage />}
      {activePage === "careers" && <CareersPage />}
      {activePage === "contact" && <ContactPage />}
    </>
  );
}

export default App;

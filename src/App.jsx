import { useState } from "react";
import Header from "./components/Header/Header";

// Pages
import HomePage from "./components/HomePage/HomePage";
import AboutUsPage from "./components/AboutUsPage/AboutUsPage";
import ServicesPage from "./components/ServicesPage/ServicesPage";
import CareersPage from "./components/CareersPage/CareersPage";
import ContactPage from "./components/ContactPage/ContactPage";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <Header active={page} onChange={(current) => setPage(current)}/>

      {page === "home" && <HomePage />}
      {page === "about" && <AboutUsPage />}
      {page === "services" && <ServicesPage />}
      {page === "careers" && <CareersPage />}
      {page === "contact" && <ContactPage />}
    </>
  );
}

export default App;

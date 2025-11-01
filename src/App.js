import React, { useState } from "react";
import Header from "./components/Header/index";
import Home from "./components/Home/index";
import Products from "./components/Products/index";
import Newsletter from "./components/Newsletter/index";
import Footer from "./components/Footer/index";
import About from "./components/About/index";
import Stories from "./components/Stories/index";
import Skills from "./components/Skills/index";
import Contact from "./components/Contact/index";
import NotFound from "./components/NotFound/index";
import './App.css';

const PAGES = {
  HOME: "home",
  PRODUCTS: "products",
  NEWSLETTER: "newsletter",
  ABOUT: "about",
  STORIES: "stories",
  SKILLS: "skills",
  CONTACT: "contact",
  NOTFOUND: "notfound",
};

function App() {
  // route state
  const [route, setRoute] = useState(PAGES.HOME);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // account gating example

  // small router function
  const navigate = (page) => {
    if (!Object.values(PAGES).includes(page)) page = PAGES.NOTFOUND;
    setRoute(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="app-root">
      <Header navigate={navigate} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <main className="main-content">
        {route === PAGES.HOME && <Home navigate={navigate} />}
        {route === PAGES.PRODUCTS && <Products isLoggedIn={isLoggedIn} navigate={navigate} />}
        {route === PAGES.NEWSLETTER && <Newsletter />}
        {route === PAGES.ABOUT && <About navigate={navigate} />}
        {route === PAGES.STORIES && <Stories />}
        {route === PAGES.SKILLS && <Skills navigate={navigate} />}
        {route === PAGES.CONTACT && <Contact />}
        {route === PAGES.NOTFOUND && <NotFound navigate={navigate} />}
      </main>

      <Footer navigate={navigate} />

    </div>
  );
}

export default App;
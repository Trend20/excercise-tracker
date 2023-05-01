import React from "react";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="footer-text">
        <p>Copyright © {new Date().getFullYear()} All Rights Reserved.</p>
        <p>
          Project by @{" "}
          <a
            href="https://devnoki.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Enock Omondi
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;

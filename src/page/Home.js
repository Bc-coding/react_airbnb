import React from "react";
import "./Home.css";
import Banner from "../components/Banner";
import Card from "../components/Card";
import data from "../components/data";
import OnlineExp from "../components/OnlineExp";
import Host from "../components/Host";

function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="home__section">
        {/* prev / next buttons  */}
        <div className="home__cards__wrapper">
          <div className="home__cards__title">
            <span>Live anywhere</span>
          </div>
          <div className="home__cards">
            {data.map((item) => (
              <Card
                title={item.title}
                src={item.src}
                href={item.href}
                key={item.title}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="home__onlineExp">
        <OnlineExp />
      </div>

      <div className="home__host">
        <Host />
      </div>
    </div>
  );
}

export default Home;

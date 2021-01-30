import React from "react";
import "./EntireHomes.css";
import SearchResult from "../components/SearchResult";
import { Button } from "@material-ui/core";
import dataHomes from "./dataHomes";

function EntireHomes() {
  return (
    <div className="entirehomes">
      <div className="entirehomes__info">
        <p>62 stays 26 August to 30 August 2 guests</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Entire Place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Instant Book</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      {dataHomes.map((home) => (
        <SearchResult
          img={home.img}
          location={home.location}
          title={home.title}
          desc={home.desc}
          star={home.star}
          price={home.price}
          total={home.total}
        />
      ))}
    </div>
  );
}

export default EntireHomes;

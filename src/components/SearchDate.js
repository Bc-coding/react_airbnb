import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./SearchDate.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import {
  DateRange,
  DateRangePicker,
  Calendar,
  DefinedRange,
} from "react-date-range";

import { addDays } from "date-fns";
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";

function SearchDate() {
  const history = useHistory();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className="searchDate">
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
        months={2}
        direction="horizontal"
        className="datePicker"
      />
      <h2>
        Number of guests
        <PeopleIcon />
      </h2>
      <input type="number" min={0} defaultValue={2} />
      <Button onClick={() => history.push("/homes")}>Search Airbnb</Button>
    </div>
  );
}

export default SearchDate;

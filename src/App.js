import React, { useEffect, useState, useCallback } from "react";
import "./App.css";
import Collapsible from "./components/Collapsible";
import SearchBar from "./components/SearchBar";
import "./styles.scss";
const axios = require("axios").default;
require("dotenv").config();

// root function
function App() {
  const [data, setData] = useState(null);
  const [allData, setAllData] = useState(null);

  // fetches data
  useEffect(() => {
    axios
      .get(
        `https://emoji-api.com/emojis?access_key=${process.env.REACT_APP_API_KEY}`
      )
      .then(function (response) {
        // handle success
        console.log(response.data);
        setData(response.data);
        setAllData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  // filters data
  const filterData = useCallback((filter) => {
    setData(filter);
  }, []);

  // visible content
  return (
    <div className="Bg">
      <header>
        <h1>Search for emoji</h1>
        <SearchBar data={allData} filterData={filterData} />
      </header>
      <div className="output">
        {data
          ? data.map((item) => (
              <Collapsible
                emoji={item.character}
                name={item.unicodeName}
                key={item.unicodeName}
                group={item.group}
                subGroup={item.subGroup}
              />
            ))
          : null}
      </div>
    </div>
  );
}

export default App;

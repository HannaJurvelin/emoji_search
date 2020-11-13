import React, { useEffect, useState } from "react";
import "./App.css";
import Collapsible from "./components/Collapsible";
import "./styles.scss";
const axios = require("axios").default;
require("dotenv").config();

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://emoji-api.com/emojis?access_key=${process.env.REACT_APP_API_KEY}`
      )
      .then(function (response) {
        // handle success
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  return (
    <div className="Bg">
      <header>
        <h1>Search for emoji</h1>
        <input type="text" id="search" />
      </header>
      <div className="output">
        {data
          ? data.map((item) => (
              <Collapsible
                emoji={item.character}
                name={item.unicodeName}
                key={item.unicodeName}
              />
            ))
          : null}
      </div>
    </div>
  );
}

export default App;

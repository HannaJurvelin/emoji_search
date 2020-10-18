import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Collapsible from "./components/Collapsible";
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
        <h1>Emoji search</h1>
        <input type="text" id="search" />
      </header>
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
  );
}

export default App;

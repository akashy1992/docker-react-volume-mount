import React, { useEffect, useState } from "react";
import "./App.css";
interface Settings {
  testConfig: string;
}

function Config() {
  const [state, setState] = useState({} as Settings);

  useEffect(() => {
    fetch("appsettings.json").then((response) => {
      response.json().then((settings: Settings) => {
        // instead of setting state you can use it any other way
        setState(settings);
      });
    });
  }, []);

  return <p>{state.testConfig}</p>;
}

export default Config;

import React, { useState, useEffect } from "react";

export default function WeatherIcon(props) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(props.src);
      // NOTE: Take error handling into consideration, what happens when the connection drops or the api is unavailalbe?
      setImageUrl(response.url);
    }
    fetchData();
  }, [props.src]);

  // NOTE: Template literals
  const finalURL = imageUrl + props.weatherIcon + "@2x.png";
  return <img className="iconSize rcorners1" src={finalURL} alt="icon"></img>;
}

import React, { useEffect, useState } from "react";

function HowToFetchData() {
  const [data, setData] = useState(null);
  useEffect(() => {
    // hacemos la petición get
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((res) => res.json())
      .then((res) => setData(res.results));

  }, []);
  return (
    <div>
      {data !== null ? <h1>hola</h1> : <h3>chau</h3>}

      {data.map((data, index) => {
        return console.log(data)
      })}

    {data.map((data, index) => {
        return <p key={index} id={index}>{data.name}</p>
      })}

    </div>
  );
}

export default HowToFetchData;

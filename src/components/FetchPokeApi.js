import React, { useEffect, useState } from "react";

function FetchPokeApi() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=2")
      .then((res) => res.json())
      .then((res) => {
        setData(res.results);
      });
  }, []);
  return (
    <div>
      {data !== null ? (
        data.map((data, index) => {
            return <p key={index} id={index}>{data.name}</p>
        })
      ) : (
        <h3>Cargada</h3>
      )}
    </div>
  );
}

export default FetchPokeApi;

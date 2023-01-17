import React, { useState } from "react";

  const AxiosPoke = () => {
    const [pokemon, setPokemon] = useState();

    const getPoke = () => {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0") //api call
        .then((res) => {
          console.log(res); //status: ok response
          return res.json(); //another async function  which means it takes time
        })
        .then((jsonResponse) => {
          console.log(jsonResponse);
          setPokemon(jsonResponse.results);
        })
      // .then(res => console.log(jsonResponse)) u can write it as just res instead of jsonResponse
      .catch((err) => console.log(err));
}; //once u get the json you need to display that info in your page by using 'State' not props
  //whenever the variable change we need to use State not props!

    // const AxiosPoke1 = async()=> {
    //   const response = await fetch("https://pokeapi.co/api/v2/pokemon/eevee")
    //   const jsonResponse = await response.json()
    //   setPokemon(jsonResponse)



  return (
    <div>
      <h1>Fetching Pokemon</h1>
      <button onClick={getPoke}>Fetch Pokemon</button>
      {/* <button onClick={AxiosPoke1}>Fetch Poke 1 with await</button> */}
      {pokemon && pokemon.map((poke,id)=>{
        return(
          <div key={id}>
          <p>{poke.name}</p>
          </div>
          )
        
      })}

    </div>
  );
}
export default AxiosPoke;

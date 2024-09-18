"use client";
import { useState } from "react";


const pokemonImages: string[] = [
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/887.png",
];

const randomPokemonImage = (): string =>{
  const index = Math.floor(Math.random() * pokemonImages.length);
  return pokemonImages[index];
};

const IndexPage = () => {
  const [pokemonImageUrl, setPokemonImageUrl] = useState(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/887.png"
  );

  const handleClick = () => {
    setPokemonImageUrl(randomPokemonImage);
  };

  return (
    <div>
      <button onClick={handleClick}>チェンジ</button>
      <img src={pokemonImageUrl}/>  
    </div>)
};

export default IndexPage;
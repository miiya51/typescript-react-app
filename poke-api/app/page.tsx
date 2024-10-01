"use client";
import { useState } from "react";
import { GetServerSideProps, NextPage } from "next";
import styles from './page.module.css';

const fetchPokemon = async () =>{
  const index = Math.floor(Math.random() * 905 + 1);
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + index);
  const result = await res.json();
  return result;
};
fetchPokemon().then((pokemon) => {
  console.log(`図鑑番号: ${pokemon['id']}`);
  console.log(`名前: ${pokemon['name']}`);
  console.log(`画像URL: ${pokemon['sprites']['front_default']}`);
});

interface IndexPageProps{
  id: number;
  name: string;
  front_image: string;
}

const IndexPage : NextPage<IndexPageProps> = (props: IndexPageProps) => {
  const [pokemonID,setPokemonID] = useState(
    props.id
  );  
  const [pokemonName,setPokemonName] = useState(
    props.name
  );
  const [pokemonImageUrl, setPokemonImageUrl] = useState(
    props.front_image
  );

  const handleClick = async () => {
    const pokemon = await fetchPokemon();
    setPokemonID(pokemon['id']);
    setPokemonName(pokemon['name']);
    setPokemonImageUrl(pokemon['sprites']['front_default']);
  };

  return (
    <div>
      <button className={styles.button} onClick={handleClick}>チェンジ</button>
      <div>
        <img src={pokemonImageUrl}/>  
        <p className="mt-10 text-5xl underline underline-offset-4">{pokemonID} {pokemonName}</p>
      </div>
    </div>
  );
};

export default IndexPage;
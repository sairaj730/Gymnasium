import { useEffect } from "react";
import { useState } from "react";
export const Pokemon = () => {
    const [pokemon,setPokemon] = useState(null);
    const API = "https://pokeapi.co/api/v2/pokemon/squirtle";
    const fetchPokemon = () => {
        fetch(API)
        .then((res) => res.json)
        .then((data) => {
            setPokemon(data);
        })
        .then((error) => console.log(error));
    }
    useEffect(() => {
        fetchPokemon();
    },[]);
    console.log(pokemon);
    if(!pokemon) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <section className="container">
            <header>Lets Catch Pokemon</header>
            <ul className="card-demo">
                <li className="pokemon-card">
                    <figure>
                        <img src={pokemon.sprites.other.dream_world.front_default} 
                        alt={pokemon.name}
                        className="pokemon-image" />
                    </figure>
                </li>
            </ul>
            <h1>{pokemon.name}</h1>
        </section>
    );
}
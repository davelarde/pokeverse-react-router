import React,  { useEffect, useState } from "react"
import {useParams} from "react-router-dom";


function PokemonDetails(){
    const params = useParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() =>{
        fetch('https://pokeapi.co/api/v2/pokemon/${params.name}')
        .then((res) => res.json())
        .then((data) => {
            setPokemon(data);
        });
    }, [params.name])
    


}
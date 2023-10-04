import axios from 'axios';
import pokemonApi from '../api/PokemonApi';
import type { PokemonListResponse, Pokemon, PokemonResponse } from '../interfaces/';
// import { sleep } from './sleep'

export const getPokemons = async(): Promise<Pokemon[]> => { 
    //Funcion intencional de hacer mas lenta la aplicacion para observar su funcionamiento
    // await sleep(2);

    const { data } = await pokemonApi.get<PokemonListResponse>('/pokemon?limit=45');

    const pokemonPromises: Promise<Pokemon>[] = [];
    
    for (const { url } of data.results ){
        const pokemonPromise = axios.get<PokemonResponse>(url).then(({ data }) => {
            return {
                id: data.id,
                name: data.name,
                frontSprite: data.sprites.front_default,
            }
        });

        pokemonPromises.push( pokemonPromise );
    }

    const pokemons = await Promise.all( pokemonPromises );

    return pokemons;
}
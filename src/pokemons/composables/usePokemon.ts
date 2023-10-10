//useQuery - implementar informacion para obtener el pokemon
// [ 'pokemon', 6]

import { useQuery } from "@tanstack/vue-query";
import { getPokemonById } from "../helpers/get-pokemon-by-id";

export const usePokemon = (id: string) => {
    const { isLoading, data: pokemon, isError, error } = useQuery(
        ['pokemon', id], //informacion de pokemon , ID del Pokemon
        () => getPokemonById( id ) //Mandar como argumento el ID del Pokemon - SIEMPRE Y CUANDO la funcion retorne una Promise va a funcionar c:
    );

    return {
        //Retorno todo lo que se me pide desde el PokemonById.vue
        isLoading,
        isError,
        pokemon,
        errorMessage: error,
    }
}
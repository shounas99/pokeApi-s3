import pokemonApi from "../api/PokemonApi";
import type { Pokemon, PokemonResponse  } from "../interfaces";

export const getPokemonById = async( id: string ): Promise<Pokemon[]> => {
    
    const { data } = await pokemonApi.get<PokemonResponse>(`/pokemon/${ id }`);

    return {
        id: data.id,
        name: data.name,
        frontSprite: data.sprites.front_default
    }

}
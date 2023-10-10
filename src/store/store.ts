//Store personalizado sin el uso de ninguna libreria
import type { Pokemon } from "@/pokemons/interfaces";
import { reactive } from "vue";


interface Store {
    //----- S T A T E -----
    pokemons: {
        list         : Pokemon[];
        count        : number;
        isLoading    : boolean;
        hasError     : boolean;
        errorMessage?: string;
    }
    //-----Actions / Methods -----
    startLoadingPokemons: () => Promise<void>;
    loadedPokemons: (data: Pokemon[]) => void;
    loadedPokemonsFailed: (error: string[]) => void;
}


const store = reactive<Store>({
    pokemons: { 
        list: [],
        count: 0,
        isLoading: false,
        hasError: false,
        errorMessage: undefined,
    },
    startLoadingPokemons: async function (): Promise<void> {
        //Lo siguiente podnra a mi aplicacion en estado de Loading...
        this.pokemons = {
            ...this.pokemons,
            isLoading: true,
            hasError: false,
            errorMessage: undefined,
        }
    },
    loadedPokemons: function(data:Pokemon[]): void {
        // console.log('loaded Pokemons - ', this.pokemons.list)
        this.pokemons = {
            list: data,
            count: data.length,
            isLoading: false,
            hasError: false,
            errorMessage: undefined,
        }
    },
    loadedPokemonsFailed: function(error: string[]): void {
        this.pokemons = {
            ...this.pokemons,
            isLoading: false,
            hasError: true,
            errorMessage: error,         
        }
    },
    
});


store.startLoadingPokemons();

export default store;
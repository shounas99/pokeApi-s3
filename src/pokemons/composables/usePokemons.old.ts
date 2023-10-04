import { computed, onMounted, ref } from 'vue';
import { getPokemons } from '../helpers/get-pokemons';
import type { Pokemon } from '../interfaces';

// export const usePokemons = () => {

//     return {
//         pokemons,
//         isLoading,

//         // count: pokemons.value.length,
//         count: computed(() => pokemons.value.length ),
//     }
// }
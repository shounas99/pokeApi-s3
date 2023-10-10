import { computed, watchEffect } from 'vue';
import { useQuery } from '@tanstack/vue-query';

import { getPokemons } from '../helpers/get-pokemons';
import { initialPokemons } from '../data/initial-pokemons';

export const usePokemons = () => {
    //composable funcion que envuelve a mi implementacion propia
    const { isLoading, data: pokemons, isError, error } = useQuery(
        ['pokemons'],
        getPokemons,
        {
            //Llamar al objeto de configuracion, para que lo intente 1 vez
            retry: 0,
            // retryDelay:  Para que despues de cierto tiempo haga la peticion
            //llamo a mi initial data que acabo de establecer en el archivo ts
            initialData: initialPokemons,
        }
    );

    watchEffect(() => {
        // console.log('isLoading - ', isLoading.value);
        // console.log('isError - ', isError.value);
    })




    return {
        //-----Properties-----
        pokemons,
        isLoading,
        isError,
        error,

        //-----Computed-----
        // cont: pokemons.value.length,u
        count: computed(() => pokemons.value?.length ?? 0 ),
    }
}
<script setup lang="ts">
import type { Pokemon } from "../interfaces";
import { useQueryClient } from "@tanstack/vue-query";

import { useRouter } from "vue-router";
import { getPokemonById } from "../helpers/get-pokemon-by-id";



interface Props {
    pokemon: Pokemon;
}

const props = defineProps<Props>();

//Navegacion con el hook de Vue
const router = useRouter();
const queryClient = useQueryClient();

const goTo = () => {
    // console.log('go To');
    //Realizar navegacion - Navegacion de las rutas por su nombre
    router.push({
        name: 'pokemon-id',
        params: { id: props.pokemon.id }
    })
}

const prefetchPokemon = () => {
    // console.log( 'LOG de prefetchPokemon', props.pokemon.id);
    const id = props.pokemon.id.toString();

    queryClient.prefetchQuery({
        //Ver referencia del composable function
        queryKey: ['pokemon', id],
        queryFn: () => getPokemonById(id)
    })
}

</script>
<template>
    <div class="pokemon-card" @click="goTo" @mouseenter="prefetchPokemon">
        <img :src="pokemon.frontSprite" :alt="pokemon.name">
        <h3>{{ pokemon.name }}</h3>
    </div>
</template>

<style scoped>
.pokemon-card {
    margin-right: 5px;
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    cursor: pointer;
}

img {
    width: 150px;
    border-radius: 5px 5px 0px 0px;
    box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.248);
}

img:hover {
    box-shadow: 0px 2px 10px rgba(8, 255, 222, 0.781);
    transition: all 0.5s;
}

</style>
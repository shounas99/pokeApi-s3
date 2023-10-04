<script setup lang="ts">
import type { Pokemon } from "../interfaces/pokemon"
import PokemonCard from "./PokemonCard.vue";

interface Props {
    pokemons: Pokemon[]
}

defineProps<Props>()
// const props = defineProps<Props>()

</script>

<template>
    <div class="card-list">
        <PokemonCard 
            v-for="pokemon of $props.pokemons" 
            :key="pokemon.id"
            :pokemon="pokemon"
        />

        <!-- <span v-for="pokemon of $props.pokemons" :key="pokemon.id">
            {{ pokemon.name }}
        </span> -->
    </div>
</template>

<style scoped>
.card-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

</style>
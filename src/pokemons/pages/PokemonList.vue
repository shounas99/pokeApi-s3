<script setup lang="ts">
  import { usePokemons } from '../composables/usePokemons';
  import PokemonCardList from '../components/PokemonCardList.vue'
  import PokemonCard from '../components/PokemonCard.vue'

  const { count, pokemons, isLoading, isError, error } = usePokemons();

</script>

<template>
  <h1 v-if="isLoading">Loading...</h1>

  <div v-else-if="isError">
    {{ error }}
  </div>

    <div v-else>
      <h1>Pokémon List - {{  count  }}</h1>

      <!-- <ul>
        <li v-for="pokemon in pokemons" :key="pokemon.id">
          {{ pokemon.name }}
        </li>
      </ul> -->

      <PokemonCardList 
        :pokemons="pokemons ?? []"
      />

      <PokemonCard 
        :pokemon="pokemons ?? []"/>
    </div>
</template>


<style scoped>

</style>
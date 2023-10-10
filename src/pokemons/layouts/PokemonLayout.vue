<script setup lang="ts">
import NavBar from '@/shared/components/NavBar.vue';
import type { RouterLink } from '@/router/list-routes';

import { pokemonRoute } from '../router/index';

//voy a recorrer mi objeto
const routeLinks: RouterLink[] = pokemonRoute.children?.map(({ name, path, props }) => {

  //Declare las props, para poder utilizarlas abajo
  const { title, visible } = props as { title: string, visible: boolean };

  return {
    name: name?.toString() ?? '',
    path: path,
    title: title,
    visible: visible,
  }
}) || [];


</script>

<template>
      <NavBar :links="routeLinks" is-secondary/>
    <div>
      <!-- <h4>Pokémon Layout</h4> -->
      <!-- <Suspense> -->
        <RouterView />

        <!-- <template #fallback>
          Loading...
        </template>
      </Suspense> -->
    </div>
</template>


<style scoped>

/* @media (min-width: 1024px) {
  .pokemon {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */

</style>
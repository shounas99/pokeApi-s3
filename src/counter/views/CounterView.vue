<script lang="ts" src="./CounterView.ts">
//NOTA: La logica se encuentra en un archivo independiente - CounterView.ts
//esto es cuando ya tengo muchas lineas de codigo, es mejor separalo.

// import { ref } from "vue";

// const counter = ref(5)
// const increase = () => {
//     counter.value++
// }


// import { defineComponent, ref } from "vue";
// export default defineComponent({
//     setup() {
//         //-----V A R I A B L E S-----
//         const counter = ref(5)
//         //-----M E T O D O S-----
//         const increase = () => {
//             counter.value++
//         }
//         return {
//             counter,
//             increase
//         }
//     }
// })

</script>

<template>
    <div class="counter">
        <h1>Counter View - {{ counter }}</h1>

        <button @click="counter++">+1</button>

    </div>
</template>

<style scoped>
</style>
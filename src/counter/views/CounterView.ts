import { defineComponent, ref } from "vue";

export default defineComponent({
    setup() {
        //-----V A R I A B L E S-----
        const counter = ref(5)
        //-----M E T O D O S-----
        const increase = () => {
            counter.value++
        }
        return {
            counter,
            increase
        }
    }
})
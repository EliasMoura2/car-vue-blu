<template>
  <th scope="row" colspan="2">Total productos</th>
  <td> {{ quantityTotal }} </td>
  <td>
    <button class="btn btn-danger btn-sm" id="vaciar-carrito" @click="emptyCar">
        vaciar todo
    </button>
  </td>
  <td class="font-weight-bold">$ <span>{{ priceTotal }} </span></td>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup(){
    const store = useStore()
    const quantityTotal = computed(() => store.getters.quantityTotal)
    const priceTotal = computed(() => store.getters.priceTotal)
    
    const emptyCar = () => { store.commit('emptyCar')}

    return { quantityTotal, priceTotal, emptyCar }
  }
}
</script>

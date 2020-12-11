<template>
  <tr>
    <th scope="row">{{ item.id }}</th>
    <td>{{ item.title }} </td>
    <td>{{ item.quantity }} </td>
    <td>
        <button class="btn btn-info btn-sm" @click="increase(item.id)">
          <!--  -->
            +
        </button>
        <button class="btn btn-danger btn-sm" @click="decrease(item.id)">
            -
        </button>
    </td>
    <!-- el calculo del total deberia ser en una propiedad computada -->
    <td>$ <span>{{ item.precio * item.quantity }} </span></td>
  </tr>
</template>

<script>

import { useStore } from 'vuex'

export default {
  props: ['item'],
  setup(){
    const store = useStore()
    const increase = id => { store.commit('increase', id)}
    const decrease = id => { store.commit('decrease', id)}

    return { increase, decrease }
  }
}
</script>

<style>

</style>
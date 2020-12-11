<template>
  <div class="col-12 col-sm-4 col-md3 col-lg-2 mb-3">
    <div class="card">
      <img :src="product.thumbnailUrl" :alt="`imagen-${product.title}`" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title"> {{ product.title }} </h5>
        <!-- <h5>Titulo</h5> -->
        <p class="card-text">$<sapn> {{ product.precio }} </sapn></p>
        <!-- <p>precio</p> -->
        <button class="btn btn-dark" @click="add(product)">Comprar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  props: ['product'],
  setup(){
    const store = useStore()
    const add = (product) => {
      // console.log(product)
      store.dispatch('addProductCar', product)
    }

    return {add}
  }
}
</script>

<template>
  <div class="home">
    <div class="container">
      <h1>Carrito</h1>
      <!-- {{ products }} -->
      <!-- <pre style="text-align: left">{{ car }}</pre> -->
      <Car />
      <!-- <hr> -->
      <!-- <Footer /> -->
      <!-- <hr> -->
      <div class="row">
        <Card
          v-for="product of products" :key="product.id" :product="product"
        />
        <!-- se crean la cantidad de cardtarjetas  -->
        <!-- como lo capturamos en la card = variable product-->
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import Card from '@/components/Card.vue'
import Car from '@/components/Car.vue'
import Footer from "@/components/Footer.vue"

export default {
  name: 'Home',
  components: {
    Card, Car, Footer
  },
  setup(){
    const store = useStore()
    onMounted(() => {
      store.dispatch('fetchData')
    })

    // los states se mapean en las propiedades computadas

    // los usamos para visualizar / debuggear
    const products = computed(() => store.state.products)
    // const car = computed( () => store.state.car)

    // return {products, car}
    return { products }
  }
}

</script>

<style scoped>
</style>

import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [],
    car: {}
  },
  mutations: {
    // las mutaciones sirven para modificar el state
    setProduct( state, payload){
      state.products = payload
      // console.log(state.products)
    },
    setCar(state, payload){
      state.car[payload.id] = payload
    },
    emptyCar(state){
      state.car = {}
    },
    increase(state, payload){
      state.car[payload].quantity = state.car[payload].quantity + 1 
    },
    decrease(state, payload){
      state.car[payload].quantity = state.car[payload].quantity - 1 
      if( state.car[payload].quantity === 0){
        delete state.car[payload]
      }
    }
  },
  actions: {
    // se ocupan para hacer un llamado al servidor o tener mayor logica
    async fetchData({commit}){
      try{
        const res = await fetch('api.json')
        const data =  await res.json()
        commit('setProduct', data)
      } catch(err){
        console.log(err)
      }
    },
    addProductCar({commit, state}, product){
      // verifica si el producto esta en el carrito
      state.car.hasOwnProperty(product.id)
        ? product.quantity = state.car[product.id].quantity + 1
        : product.quantity = 1
        commit('setCar', product)
    }
  },
  getters: {
    quantityTotal(state){
      return Object.values(state.car).reduce((acc, {quantity}) => acc + quantity, 0)
    },
    priceTotal(state){
      return Object.values(state.car).reduce((acc, {quantity, precio}) => acc + quantity * precio, 0)
    }
  },
  modules: {
  }
})

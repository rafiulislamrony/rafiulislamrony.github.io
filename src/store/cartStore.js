import { defineStore } from "pinia";
const products = JSON.parse(localStorage.getItem("products") || '{}');

export const useCartStore = defineStore("cart", {
  state: () => ({
    products: products,
  }),
  getters: {
    totalPrice() {
      let total = 0;
      for (const key in this.products) {
        total += this.products[key].price * this.products[key].quantity;
      }
      return total;
    },
  },
  actions: {
    clearCart(){
      this.products = {};
    },
    add(payload) {
      console.log(payload);
      if (this.products[payload._id]) {
        this.products[payload._id].quantity += payload.quantity;
      } else {
        this.products[payload._id] = payload;
      }
    },
    remove(id){
      delete this.products[id];
    }
  },
});

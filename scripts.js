const { createApp } = Vue;

createApp({
  data() {
    return {
      products: window.products
    }
  },
  methods: {
    total: function () {
      var total = 0;

      this.products.forEach(item => {
        if (item.active) {
          total += item.price * item.quantity
        }
      });

      return total.toFixed(2);
    }
  }
}).mount('#app')
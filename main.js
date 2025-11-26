const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      description: "These socks are woolly and wonderful!",
      selectedVariant: 0,
      url: "https://google.com",
      inventory: 100,
      activeClass: true,
      brand: "Vue Mastery",
      onSale: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 50,
          sale: true,
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
          sale: false,
        },
      ],
      sizes: ["sm", "reg", "lg", "xxl"],
      cart: 0,
    };
  },
  methods: {
    addToCart() {
      this.cart++;
    },
    removeFromCart() {
      this.cart--;
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title: function () {
      return `${this.brand} ${this.product}`;
    },
    image: function () {
      return this.variants[this.selectedVariant].image;
    },
    inStock: function () {
      return this.variants[this.selectedVariant].quantity > 0;
    },
    sale: function () {
      return this.variants[this.selectedVariant].sale;
    },
  },
});

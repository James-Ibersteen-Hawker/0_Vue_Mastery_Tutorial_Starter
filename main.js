const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      description: "These socks are woolly and wonderful!",
      image: "./assets/images/socks_green.jpg",
      url: "https://google.com",
      inventory: 100,
      onSale: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
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
    updateImage(variantImage) {
      this.image = variantImage;
    },
  },
});

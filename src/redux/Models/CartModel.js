const CartModel = {
  state: { products: [] },
  reducers: {
    addProduct(state, payload) {
      return { ...state, products: [...state.products, payload] };
    },
    removeProduct(state, payload) {
      console.log("payload", payload);
      const temp = state.products.filter((_) => _.id !== payload);
      return { ...state, products: [...temp] };
    },
  },
  effects: () => ({
    async addProductToCart(payload) {
      this.addProduct(payload);
    },
    async removeProductToCart(payload) {
      this.removeProduct(payload);
    },
  }),
};

export default CartModel;

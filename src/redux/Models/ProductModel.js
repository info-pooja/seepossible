import axiosClient from "../../api/axiosClient";

const ProductModel = {
  state: { products: [] },
  reducers: {
    setProduct(state, payload) {
      return { ...state, products: [...payload] };
    },
  },
  effects: () => ({
    async getProduct() {
      let response = await axiosClient.get("/products");
      this.setProduct(response.data.products);
    },
  }),
};

export default ProductModel;

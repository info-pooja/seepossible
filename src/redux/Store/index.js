import persistPlugin from "@rematch/persist";
import { init } from "@rematch/core";
import storage from "redux-persist/lib/storage";
import createLoadingPlugin from "@rematch/loading";
import ErrorModel from "../Models/ErrorModel";
import SigninModel from "../Models/SigninModel";
import SignupModel from "../Models/SignupModel";
import ProductModel from "../Models/ProductModel";
import CartModel from "../Models/CartModel";

const persistConfig = {
  key: "root",
  storage,
};

const loadingPlugin = createLoadingPlugin();

const store = init({
  plugins: [persistPlugin(persistConfig), loadingPlugin],
  models: { ErrorModel, SigninModel, SignupModel, ProductModel, CartModel },
});

export default store;

import Layout from "./layout";

function App({ children, history }) {
  return <Layout history={history}>{children}</Layout>;
}

export default App;

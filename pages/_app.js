import "../styles/global.css";
import Layout from "../components/Layout";

const App = ({ Component, pageProps }) => {
  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  );
};
export default App;
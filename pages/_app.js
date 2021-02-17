import Layout from "../components/Layout";
import GlobalStyles from "../components/GlobalStyles";
// import "../styles/global.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyles />
      <Layout name="BarApp">
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;

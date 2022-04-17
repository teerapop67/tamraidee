import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/Global.Style";
import Layout from "../src/components/Layout/main";
import { Provider } from "react-redux";
import store, { persistor } from "../src/Redux/store";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} />
        <Layout router={router}>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;

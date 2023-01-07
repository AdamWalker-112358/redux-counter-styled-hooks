import GlobalStyles from "./styles/global.styles";
import "bootstrap/dist/css/bootstrap.min.css";

import * as ReactDOMClient from "react-dom/client";
import App from "./view/App.view";

import { Provider } from "react-redux";
import store from "./state/configure.store";

const container = document.querySelector("#root");
const root = ReactDOMClient.createRoot(container);

root.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
    <GlobalStyles />
  </>
);

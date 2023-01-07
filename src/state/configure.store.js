import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/root.reducer";
import useLocalStorage from "./local-storage";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const previousState = JSON.parse(window.localStorage.getItem("state") || {});
const middleware = composeWithDevTools(
  applyMiddleware(useLocalStorage(), thunk)
);

const store = createStore(rootReducer, previousState, middleware);
export default store;

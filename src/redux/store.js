import { createStore } from "redux";

import { rootReucers } from "./reducer/rootReducer";

const store = createStore(
  rootReucers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

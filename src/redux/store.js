import { createStore } from "redux";
import rootReducer from "./reducers";

// Создаем и экспортируем store
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Для работы с Redux DevTools
);

export default store;

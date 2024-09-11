import { SET_USER_INFO } from "./actions";

// Начальное состояние
const initialState = {
  name: "Аноним",
  status: "Не авторизован",
};

// Редьюсер для обработки действия SET_USER_INFO
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        name: action.payload.name,
        status: action.payload.status,
      };
    default:
      return state;
  }
};

export default userReducer;

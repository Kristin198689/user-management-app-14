// Тип действия
export const SET_USER_INFO = "SET_USER_INFO";

// Action Creator для обновления информации о пользователе
export const setUserInfo = (name, status) => ({
  type: SET_USER_INFO,
  payload: { name, status },
});

import React, { useState } from "react";
import { connect } from "react-redux";
import { setUserInfo } from "../redux/actions";
import styles from "../styles/UserForm.module.css"; // Путь должен вести в папку styles

const UserForm = ({ setUserInfo }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && status) {
      setUserInfo(name, status); // Обновляем информацию о пользователе
      setName("");
      setStatus("");
    } else {
      alert("Пожалуйста, заполните все поля.");
    }
  };

  return (
    <form className={styles.userForm} onSubmit={handleSubmit}>
      <div>
        <label>Имя</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Статус</label>
        <input
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
      </div>
      <button type="submit">Обновить</button>
    </form>
  );
};

export default connect(null, { setUserInfo })(UserForm);

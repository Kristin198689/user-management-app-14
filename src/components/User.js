import React from "react";
import { connect } from "react-redux";
//import styles from "./User.module.css";
import styles from "../styles/User.module.css"; // Путь должен вести в папку styles

const User = ({ name, status }) => {
  return (
    <div className={styles.userContainer}>
      <h2>Информация о пользователе</h2>
      <p>
        <strong>Имя:</strong> {name}
      </p>
      <p>
        <strong>Статус:</strong> {status}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: state.name,
  status: state.status,
});

export default connect(mapStateToProps)(User);

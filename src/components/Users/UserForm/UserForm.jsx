import React, { useRef, useEffect, useCallback } from "react";
import { createUser, getUserDetail, updateUser } from "../../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./UserForm.module.css";

const UserForm = ({ isEdit }) => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const navigate = useNavigate();
  const { id } = useParams();

  const getUserDetails = useCallback(async () => {
    const response = await getUserDetail(id);
    const { first_name, last_name, email } = response.data.data;
    firstNameRef.current.value = first_name;
    lastNameRef.current.value = last_name;
    emailRef.current.value = email;
  }, [id]);
  useEffect(() => {
    if (isEdit && id) {
      getUserDetails();
    }
  }, [isEdit, id, getUserDetails]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      first_name: firstNameRef.current.value,
      last_name: lastNameRef.current.value,
      email: emailRef.current.value,
    };

    if (isEdit) {
      await updateUser(id, userData);
    } else {
      await createUser(userData);
    }

    navigate("/users");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{isEdit ? "Edit User" : "Create User"}</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          ref={firstNameRef}
          type="text"
          placeholder="First Name"
          className={styles.input}
          required
        />
        <input
          ref={lastNameRef}
          type="text"
          placeholder="Last Name"
          className={styles.input}
          required
        />
        <input
          ref={emailRef}
          type="email"
          placeholder="Email"
          className={styles.input}
          required
        />
        <button type="submit" className={styles.button}>
          {isEdit ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default UserForm;

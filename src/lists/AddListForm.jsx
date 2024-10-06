import React from "react";
import Button from "../ui/Button";
import styles from "./AddListForm.module.css";

function AddListForm({ value, onChange, onSubmit }) {
  return (
    <form
      className={styles.listForm}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(); // Ensure this calls the correct function
      }}
    >
      <input type="text" value={value} onChange={onChange} />
      <Button type="submit">Add new List</Button>
    </form>
  );
}

export default AddListForm;

import Button from "../ui/Button";
import styles from "./AddListForm.module.css";

function AddListForm({ value, onChange, onSubmit }) {
  return (
    <form className={styles.listForm} onSubmit={onSubmit}>
      <input type="text" value={value} onChange={onChange} />
      <Button>Add new List</Button>
    </form>
  );
}

export default AddListForm;

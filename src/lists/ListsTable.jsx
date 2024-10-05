import styles from "./ListsTable.module.css";
import { useState } from "react";
import List from "./List";
import AddListForm from "./AddListForm";
import Button from "../ui/Button";

function ListsTable() {
  // Initial state for test
  const [lists, setLists] = useState([
    {
      title: "days",
      cards: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
    },
    {
      title: "months",
      cards: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    },
    {
      title: "Seasons",
      cards: ["Winter", "Spring", "Summer", "Autumn"],
    },
  ]);
  // State to manage new list
  const [newList, setNewlist] = useState("");

  // State to track the index of the list being dragged
  const [draggedListIndex, setDraggedListIndex] = useState(null);

  // Function to handle the start of dragging a list
  function handleDragStart(index) {
    setDraggedListIndex(index);
  }

  // Function to allow dropping by preventing the default behavior
  function handleDragOver(event) {
    event.preventDefault();
  }

  // Function to handle dropping a list at a new position
  function handleDrop(index) {
    const newLists = [...lists];
    const [movedList] = newLists.splice(draggedListIndex, 1);
    newLists.splice(index, 0, movedList);
    setLists(newLists);
    setDraggedListIndex(null);
  }

  // Function to update the cards of a specific list
  function updateCards(listIndex, newCards) {
    const newLists = lists.map((list, index) =>
      index === listIndex ? { ...list, cards: newCards } : list
    );
    setLists(newLists);
  }

  // Function to create new list
  function addList() {
    if (!newList) return;
    setLists([...lists, { title: newList, cards: [] }]);
    setNewlist("");
  }

  // Function to remove a list by index
  function removeList(index) {
    const newLists = lists.filter((_, i) => i !== index);
    setLists(newLists);
  }

  return (
    <ul className={styles.listsTable}>
      {lists.map((list, index) => (
        <li
          key={index}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={handleDragOver}
          onDrop={() => handleDrop(index)}
          className={`${styles.list} ${
            draggedListIndex === index ? styles.dragging : ""
          }`}
        >
          <List
            list={list}
            updateCards={(newCards) => updateCards(index, newCards)}
            removeList={() => removeList(index)}
          />
        </li>
      ))}
      <li>
        <AddListForm
          value={newList}
          onChange={(e) => setNewlist(e.target.value)}
          onSubmit={() => addList(newList)}
        />
      </li>
    </ul>
  );
}

export default ListsTable;

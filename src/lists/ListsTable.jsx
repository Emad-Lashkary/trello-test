import React, { useState } from "react";
import styles from "./ListsTable.module.css";
import List from "./List";
import AddListForm from "./AddListForm";
import useLists from "../hooks/useLists";

function ListsTable() {
  const {
    lists,
    addList,
    removeList,
    updateCards,
    handleDragStart,
    handleDrop,
    handleDragEnd,
    draggedListIndex,
  } = useLists([
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

  const [newList, setNewlist] = useState("");

  return (
    <ul className={styles.listsTable}>
      {lists.map((list, index) => (
        <li
          key={index}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => handleDrop(index)}
          onDragEnd={handleDragEnd}
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
          onSubmit={() => {
            addList(newList);
            setNewlist(""); // Clear the input after adding the list
          }}
        />
      </li>
    </ul>
  );
}

export default ListsTable;

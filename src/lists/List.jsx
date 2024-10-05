import React, { useState, useEffect } from "react";
import styles from "./List.module.css";
import Button from "../ui/Button";
import Card from "./Card";

function List({ list, updateCards, removeList }) {
  // State to manage the list of cards
  const [cards, setCards] = useState(list.cards);
  // State to track which card is being edited
  const [editingIndex, setEditingIndex] = useState(null);

  // To update the cards state when the list prop changes
  useEffect(() => {
    setCards(list.cards);
  }, [list.cards]);

  // Function to add a new card
  function addCard() {
    const newCards = [...cards, ""];
    setCards(newCards);
    updateCards(newCards);
    setEditingIndex(cards.length);
  }

  // Function to handle changes in the card input field
  function handleCardChange(index, event) {
    const updatedCards = [...cards];
    updatedCards[index] = event.target.value;
    const filteredCards = updatedCards.filter((card) => card !== "");
    setCards(filteredCards);
    updateCards(filteredCards);
  }

  // Function to handle the edit button click
  function handleEditClick(index) {
    setEditingIndex(index);
  }

  // Function to handle when the input field loses focus
  function handleBlur() {
    setEditingIndex(null);
    const filteredCards = cards.filter((card) => card !== "");
    setCards(filteredCards);
    updateCards(filteredCards);
  }

  // Function to handle the Enter key press
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleBlur();
    }
  }

  return (
    <div className={styles.list}>
      <h3>{list.title}</h3>
      <ul className={styles.cards}>
        {cards.map((card, index) => (
          <Card
            key={index}
            card={card}
            index={index}
            editingIndex={editingIndex}
            handleCardChange={handleCardChange}
            handleEditClick={handleEditClick}
            handleBlur={handleBlur}
            handleKeyDown={handleKeyDown}
          />
        ))}
      </ul>
      <div className={styles.buttons}>
        <Button onClick={addCard}>Add new Card</Button>
        <Button remove onClick={removeList} />
      </div>
    </div>
  );
}

export default List;

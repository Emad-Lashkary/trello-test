import React, { useState, useRef, useEffect } from "react";
import styles from "./List.module.css";
import { FaPlus, FaEdit } from "react-icons/fa";
import Button from "../ui/Button";

function List({ list, updateCards }) {
  // State to manage the list of cards
  const [cards, setCards] = useState(list.cards);
  // State to track which card is being edited
  const [editingIndex, setEditingIndex] = useState(null);
  // Ref to new card input field
  const newCardRef = useRef(null);

  // To update the cards state when the list prop changes
  useEffect(() => {
    setCards(list.cards);
  }, [list.cards]);

  // To focus on new card input field when a new card add
  useEffect(() => {
    if (newCardRef.current) {
      newCardRef.current.focus();
    }
  }, [cards]);

  // Function to add a new card to the list
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
          <li key={index} className={styles.card}>
            {editingIndex === index ? (
              <input
                type="text"
                value={card}
                onChange={(e) => handleCardChange(index, e)}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
                ref={newCardRef}
                className={styles.cardInput}
              />
            ) : (
              <div className={styles.cardContent}>
                {card}
                <FaEdit
                  className={styles.editIcon}
                  onClick={() => handleEditClick(index)}
                />
              </div>
            )}
          </li>
        ))}
      </ul>
      <Button onClick={addCard}>Add new Card</Button>
    </div>
  );
}

export default List;

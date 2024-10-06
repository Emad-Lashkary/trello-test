import { useState, useEffect } from "react";

/**
 * Custom hook to manage cards and their state.
 * @param {Array} initialCards - Initial state of the cards.
 * @returns {Object} - Object containing cards state and functions to manipulate cards.
 */
function useCards(initialCards) {
  // State to hold the cards
  const [cards, setCards] = useState(initialCards);
  // State to track which card is being edited
  const [editingIndex, setEditingIndex] = useState(null);

  // Update the cards state when the initialCards prop changes
  useEffect(() => {
    setCards(initialCards);
  }, [initialCards]);

  //Adds a new card to the state. Sets the new card to an empty string and focuses on it.
  function addCard() {
    const newCards = [...cards, ""];
    setCards(newCards);
    setEditingIndex(cards.length);
  }

  //Handles changes in the card input field. Updates the card value in the state.
  function handleCardChange(index, event) {
    const updatedCards = [...cards];
    updatedCards[index] = event.target.value;
    setCards(updatedCards);
  }

  //Handles the edit button click. Sets the index of the card being edited.
  function handleEditClick(index) {
    setEditingIndex(index);
  }

  // Handles when the input field loses focus. Removes empty cards from the state.

  function handleBlur() {
    setEditingIndex(null);
    setCards(cards.filter((card) => card !== ""));
  }

  //Handles the Enter key press. Call handleBlur to save the card and remove focus.
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleBlur();
    }
  }

  return {
    cards,
    editingIndex,
    addCard,
    handleCardChange,
    handleEditClick,
    handleBlur,
    handleKeyDown,
  };
}

export default useCards;

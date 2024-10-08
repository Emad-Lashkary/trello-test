import { useState } from "react";

/**
 * Custom hook to manage lists and their state.
 * @param {Array} initialLists - Initial state of the lists.
 * @returns {Object} - Object containing lists state and functions to manipulate lists.
 */
function useLists(initialLists) {
  // State for hold the lists
  const [lists, setLists] = useState(initialLists);
  // State for track the index of the list being dragged
  const [draggedListIndex, setDraggedListIndex] = useState(null);

  //adds a new list to the state. Make sures the new list title is not empty before adding.
  function addList(newList) {
    if (!newList) return;
    setLists([...lists, { title: newList, cards: [] }]);
  }

  //Removes a list from the state by its index.
  function removeList(index) {
    setLists(lists.filter((_, i) => i !== index));
  }

  // Updates the cards of a specific list. Finds the list by its index and updates its cards.
  function updateCards(listIndex, newCards) {
    setLists(
      lists.map((list, index) =>
        index === listIndex ? { ...list, cards: newCards } : list
      )
    );
  }

  //Handles the start of draging a list. Sets the index of the list being draged.
  function handleDragStart(index) {
    setDraggedListIndex(index);
  }

  // Handles the end of dragging. Resets the draggedListIndex state.
  function handleDragEnd() {
    setDraggedListIndex(null);
  }

  //Handles dropping a list at a new position. Moves the draged list to the new position in the state.
  function handleDrop(index) {
    const newLists = [...lists];
    const [movedList] = newLists.splice(draggedListIndex, 1);
    newLists.splice(index, 0, movedList);
    setLists(newLists);
    setDraggedListIndex(null);
  }

  return {
    lists,
    addList,
    removeList,
    updateCards,
    handleDragStart,
    handleDrop,
    handleDragEnd,
    draggedListIndex,
  };
}

export default useLists;

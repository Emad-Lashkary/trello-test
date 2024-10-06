import React, { useEffect, useRef } from "react";
import styles from "./List.module.css";
import Button from "../ui/Button";
import Card from "./Card";
import useCards from "../hooks/useCards";

function List({ list, updateCards, removeList }) {
  const {
    cards,
    editingIndex,
    addCard,
    handleCardChange,
    handleEditClick,
    handleBlur,
    handleKeyDown,
  } = useCards(list.cards);

  const prevCardsRef = useRef(cards);

  useEffect(() => {
    if (JSON.stringify(prevCardsRef.current) !== JSON.stringify(cards)) {
      updateCards(cards);
      prevCardsRef.current = cards;
    }
  }, [cards, updateCards]);

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

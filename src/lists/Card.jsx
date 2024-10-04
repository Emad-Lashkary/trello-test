import React, { useRef, useEffect } from "react";
import styles from "./Card.module.css";
import { FaEdit } from "react-icons/fa";

function Card({
  card,
  index,
  editingIndex,
  handleCardChange,
  handleEditClick,
  handleBlur,
  handleKeyDown,
}) {
  // Ref to new card input field
  const cardRef = useRef(null);

  // To focus on new card input field when a new card add
  useEffect(() => {
    if (editingIndex === index && cardRef.current) {
      cardRef.current.focus();
    }
  }, [editingIndex, index]);

  return (
    <li className={styles.card}>
      {editingIndex === index ? (
        <input
          type="text"
          value={card}
          onChange={(e) => handleCardChange(index, e)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          ref={cardRef}
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
  );
}

export default Card;

import { useState } from "react";
import { FaHeart } from "react-icons/fa";

import styles from "./book.module.css";

function Book({ book, handleLikedList }) {
  const { image, title, author, language, pages } = book;

  const [like, setLike] = useState(false);

  const likeHandler = () => {
    handleLikedList(book, like);
    setLike((like) => !like);
  };

  return (
    <div className={styles.book}>
      <img src={image} />
      <div className={styles.info}>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <p>
          {language} <span>{pages} pages</span>
        </p>
      </div>
      <button onClick={likeHandler}>
        <FaHeart color={like ? "red" : "#e0e0e0"} fontSize="1.8rem" />
      </button>
    </div>
  );
}

export default Book;

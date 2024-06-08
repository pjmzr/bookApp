import { useState } from "react";

import { books as booksData } from "../constants/mockData";
import Book from "./Book";
import SideBook from "./SideBook";
import SearchBox from "./SearchBox";

import styles from "./Books.module.css";

function Books() {
  const [books, setBooks] = useState(booksData);
  const [search, setSearch] = useState([]);
  const [liked, setLiked] = useState([]);

  const handleLikedList = (book, status) => {
    if (status) {
      const newLikedList = liked.filter((note) => note.id !== book.id);
      setLiked(newLikedList);
    } else {
      setLiked((liked) => [...liked, book]);
    }
  };

  const searchHandler = () => {
    if (search) {
      const newBooks = booksData.filter((book) =>
        book.title.toLowerCase().includes(search)
      );
      setBooks(newBooks);
    } else {
      setBooks(booksData);
    }
  };
  return (
    <>
      <SearchBox
        serach={search}
        setSearch={setSearch}
        searchHandler={searchHandler}
      />
      <div className={styles.both}>
        <div className={styles.left}>
          {books.map((book) => (
            <Book book={book} key={book.id} handleLikedList={handleLikedList} />
          ))}
        </div>
        {!!liked.length && (
          <div className={styles.right}>
            <h2>Favorites</h2>
            {liked.map((book) => (
              <SideBook key={book.id} book={book} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Books;

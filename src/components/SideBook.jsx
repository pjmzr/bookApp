import styles from "./SideBook.module.css";

function SideBook({ book: { image, title } }) {
  return (
    <div className={styles.fav}>
      <img src={image} />
      <h3>{title}</h3>
    </div>
  );
}

export default SideBook;

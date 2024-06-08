import styles from "./Layout.module.css";

function layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p>
          <a href="#">pjmzr</a> | React.js First Project
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>developed by pejman with love</p>
      </footer>
    </>
  );
}

export default layout;

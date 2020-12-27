import styles from './Navbar.module.scss';

const Navbar = (props) => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>SimpleCountDownTimer</h1>
      {props.children}
    </div>
  );
};

export default Navbar;

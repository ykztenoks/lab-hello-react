import style from "./header.module.css";

function Header() {
  return (
    <div className={style.text}>
      <h1 className={style.h1}>Say hello to ReactJS</h1>
      <p>
        You will learn how to use the most popular frontend library, and become
        a super Ninja developer.
      </p>
      <button>Awesome!</button>
    </div>
  );
}

export default Header;

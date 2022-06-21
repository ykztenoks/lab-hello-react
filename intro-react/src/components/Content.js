import DeclarativeIcon from "../assets/images/icon1.png";
import ComponentsIcon from "../assets/images/icon2.png";
import SinglewayIcon from "../assets/images/icon3.png";
import JSXIcon from "../assets/images/icon4.png";
import style from "./content.module.css";

export default function Content() {
  return (
    <div className={style.content}>
      <div>
        <img
          className={style.icon}
          src={DeclarativeIcon}
          alt="Declarative Icon"
        />
        <h3>Declarative</h3>
        <p className={style.text}>
          React makes it painless to create interactive UIs.
        </p>
      </div>
      <div>
        <img
          className={style.icon}
          src={ComponentsIcon}
          alt="Components Icon"
        />
        <h3>Components</h3>
        <p className={style.text}>
          Build encapsulated components that manage their state
        </p>
      </div>
      <div>
        <img className={style.icon} src={SinglewayIcon} alt="Single-Way Icon" />
        <h3>Single-Way</h3>
        <p className={style.text}>
          A set of immutable values are passed to the components
        </p>
      </div>
      <div>
        <img className={style.icon} src={JSXIcon} alt="JSX Icon" />
        <h3>JSX</h3>
        <p className={style.text}>
          Statically-typed, designed to run on modern browsers
        </p>
      </div>
    </div>
  );
}

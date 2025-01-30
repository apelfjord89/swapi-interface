import classNames from "classnames";
import { Spinner } from "../Spinner/Spinner";
import styles from "./button.module.css";

type ButtonProps = {
  onClick: VoidFunction | (() => Promise<void>);
  title: string;
  loading?: boolean;
};

/*
Double click-protected button that reacts to loading state
*/

export const Button = ({ title, onClick, loading }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        styles.button,
        loading ? styles.disabled : styles.active
      )}
      disabled={loading}
    >
      {title}
      {loading && <Spinner />}
    </button>
  );
};

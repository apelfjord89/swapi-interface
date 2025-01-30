import styles from "./cardCarousel.module.css";

type CardCarousel = {
  children: React.ReactNode;
};

export const CardCarousel = ({ children }: CardCarousel) => {
  return <div className={styles.cardCarousel}>{children}</div>;
};

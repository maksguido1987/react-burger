import { Ingredient as IngredientType } from "../lib/types";
import styles from "./Ingredient.module.css";

interface IngredientProps {
  ingredient: IngredientType;
}

export const Ingredient = ({ ingredient }: IngredientProps) => {
  return (
    <div className={styles.ingredientItem}>
      <div className={styles.imageContainer}>
        <img
          src={ingredient.image}
          alt={ingredient.name}
          className={styles.ingredientImage}
        />
      </div>
      <div className={styles.price}>
        <span className={styles.priceValue}>{ingredient.price}</span>
        <span className={styles.priceIcon}>💎</span>
      </div>
      <div className={styles.name}>{ingredient.name}</div>
    </div>
  );
};

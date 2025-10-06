import { Ingredient as IngredientType } from "../lib/types";
import styles from "./Ingredient.module.css";

interface IngredientProps {
  ingredient: IngredientType;
  onClick: (ingredient: IngredientType) => void;
}

export const Ingredient = ({ ingredient, onClick }: IngredientProps) => {
  const handleIngredientClick = () => {
    onClick(ingredient);
  };

  return (
    <div
      className={styles.ingredientItem}
      onClick={handleIngredientClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleIngredientClick();
        }
      }}
    >
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

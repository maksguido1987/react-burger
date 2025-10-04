import { Ingredient } from "../../burger-ingredients/lib/types";
import styles from "./IngredientDetails.module.css";

interface IngredientDetailsProps {
  ingredient: Ingredient;
}

export const IngredientDetails = ({ ingredient }: IngredientDetailsProps) => {

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src={ingredient.image_large || ingredient.image}
          alt={ingredient.name}
          className={styles.image}
        />
      </div>
      <h3 className="text text_type_main-medium">{ingredient.name}</h3>
      <div className={styles.nutritionInfo}>
        <div className={styles.nutritionItem}>
          <span className="text text_type_main-default text_color_inactive">
            Калории,ккал
          </span>
          <span className="text text_type_digits-default">
            {ingredient.calories}
          </span>
        </div>
        <div className={styles.nutritionItem}>
          <span className="text text_type_main-default text_color_inactive">
            Белки, г
          </span>
          <span className="text text_type_digits-default">
            {ingredient.proteins}
          </span>
        </div>
        <div className={styles.nutritionItem}>
          <span className="text text_type_main-default text_color_inactive">
            Жиры, г
          </span>
          <span className="text text_type_digits-default">
            {ingredient.fat}
          </span>
        </div>
        <div className={styles.nutritionItem}>
          <span className="text text_type_main-default text_color_inactive">
            Углеводы, г
          </span>
          <span className="text text_type_digits-default">
            {ingredient.carbohydrates}
          </span>
        </div>
      </div>
    </div>
  );
};

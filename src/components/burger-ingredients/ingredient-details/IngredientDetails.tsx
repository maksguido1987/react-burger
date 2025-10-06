import { Ingredient } from "../lib/types";
import styles from "./IngredientDetails.module.css";

interface IngredientDetailsProps {
  ingredient: Ingredient;
}

interface NutritionItem {
  label: string;
  value: number;
}

export const IngredientDetails = ({ ingredient }: IngredientDetailsProps) => {
  const nutritionData: NutritionItem[] = [
    {
      label: "Калории,ккал",
      value: ingredient.calories,
    },
    {
      label: "Белки, г",
      value: ingredient.proteins,
    },
    {
      label: "Жиры, г",
      value: ingredient.fat,
    },
    {
      label: "Углеводы, г",
      value: ingredient.carbohydrates,
    },
  ];

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
        {nutritionData.map((item, index) => (
          <div key={index} className={styles.nutritionItem}>
            <span className="text text_type_main-default text_color_inactive">
              {item.label}
            </span>
            <span className="text text_type_digits-default">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

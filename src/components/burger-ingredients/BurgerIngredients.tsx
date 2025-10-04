import { useState } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { Ingredient, IngredientType } from "./lib/types";
import { mockData } from "../../utils/data";
import { combineScrollbarClass } from "../../utils/scrollbar-classes";
import { Ingredient as IngredientComponent } from "./ingredient/Ingredient";
import styles from "./BurgerIngredients.module.css";

export const BurgerIngredients = () => {
  const [activeTab, setActiveTab] = useState<IngredientType>("bun");

  const handleTabClick = (value: string) => {
    setActiveTab(value as IngredientType);
  };

  const getSectionTitle = (tabType: IngredientType): string => {
    switch (tabType) {
      case "bun":
        return "Булки";
      case "sauce":
        return "Соусы";
      case "main":
        return "Начинки";
      default:
        return "";
    }
  };

  const filteredIngredients = (type: IngredientType): Ingredient[] => {
    return mockData.filter((ingredient) => ingredient.type === type);
  };

  return (
    <section className={styles.container}>
      <p className="text text_type_main-large">Соберите бургер</p>

      <div className={styles.tabs}>
        <Tab value="bun" active={activeTab === "bun"} onClick={handleTabClick}>
          Булки
        </Tab>
        <Tab
          value="sauce"
          active={activeTab === "sauce"}
          onClick={handleTabClick}
        >
          Соусы
        </Tab>
        <Tab
          value="main"
          active={activeTab === "main"}
          onClick={handleTabClick}
        >
          Начинки
        </Tab>
      </div>
      <p className="text text_type_main-medium">{getSectionTitle(activeTab)}</p>
      <div className={combineScrollbarClass(styles.ingredients, "default")}>
        <div className={styles.ingredientsGrid}>
          {filteredIngredients(activeTab).map((ingredient) => (
            <IngredientComponent key={ingredient._id} ingredient={ingredient} />
          ))}
        </div>
      </div>
    </section>
  );
};

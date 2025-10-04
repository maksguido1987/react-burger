import { useState, useRef, useEffect } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { Ingredient, IngredientType } from "./lib/types";
import { combineScrollbarClass } from "../../utils/scrollbar-classes";
import { Ingredient as IngredientComponent } from "./ingredient/Ingredient";
import styles from "./BurgerIngredients.module.css";

interface BurgerIngredientsProps {
  ingredients: Ingredient[];
}

export const BurgerIngredients = ({ ingredients }: BurgerIngredientsProps) => {
  const [activeTab, setActiveTab] = useState<IngredientType>("bun");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<{
    [key in IngredientType]: HTMLDivElement | null;
  }>({
    bun: null,
    sauce: null,
    main: null,
  });

  const handleTabClick = (value: IngredientType) => {
    setActiveTab(value);

    const sectionElement = sectionRefs.current[value];
    if (sectionElement && scrollContainerRef.current) {
      sectionElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
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

  const getIngredientsByType = (type: IngredientType): Ingredient[] => {
    return ingredients.filter((ingredient) => ingredient.type === type);
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;

    const scrollTop = scrollContainerRef.current.scrollTop;
    const containerHeight = scrollContainerRef.current.clientHeight;
    const scrollPosition = scrollTop + containerHeight / 2;

    // Определяем активную секцию на основе позиции прокрутки
    const sections = Object.entries(sectionRefs.current) as [
      IngredientType,
      HTMLDivElement | null
    ][];

    for (const [type, element] of sections) {
      if (element) {
        const rect = element.getBoundingClientRect();
        const containerRect =
          scrollContainerRef.current.getBoundingClientRect();
        const elementTop = rect.top - containerRect.top + scrollTop;
        const elementBottom = elementTop + rect.height;

        if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
          setActiveTab(type);
          break;
        }
      }
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section className={styles.container}>
      <p className="text text_type_main-large">Соберите бургер</p>

      <div className={styles.tabs}>
        <Tab
          value="bun"
          active={activeTab === "bun"}
          onClick={() => handleTabClick("bun")}
        >
          Булки
        </Tab>
        <Tab
          value="sauce"
          active={activeTab === "sauce"}
          onClick={() => handleTabClick("sauce")}
        >
          Соусы
        </Tab>
        <Tab
          value="main"
          active={activeTab === "main"}
          onClick={() => handleTabClick("main")}
        >
          Начинки
        </Tab>
      </div>

      <div
        ref={scrollContainerRef}
        className={combineScrollbarClass(styles.ingredients, "default")}
      >
        {(["bun", "sauce", "main"] as IngredientType[]).map((type) => (
          <div
            key={type}
            ref={(el) => {
              sectionRefs.current[type] = el;
            }}
          >
            <p className="text text_type_main-medium">
              {getSectionTitle(type)}
            </p>
            <div className={styles.ingredientsGrid}>
              {getIngredientsByType(type).map((ingredient) => (
                <IngredientComponent
                  key={ingredient._id}
                  ingredient={ingredient}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

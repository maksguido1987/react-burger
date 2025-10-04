import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Ingredient } from "../burger-ingredients/lib/types";
import styles from "./BurgerConstructor.module.css";
import { combineScrollbarClass } from "../../utils/scrollbar-classes";

interface BurgerConstructorProps {
  ingredients: Ingredient[];
}

export const BurgerConstructor = ({ ingredients }: BurgerConstructorProps) => {
  // Выбираем первую доступную булочку
  const selectedBun = ingredients.find((item) => item.type === "bun");

  const totalPrice =
    ingredients.reduce((sum, item) => sum + item.price, 0) +
    (selectedBun ? selectedBun.price * 2 : 0);

  return (
    <section className={styles.constructorSection}>
      <div className={styles.constructorItems}>
        {/* Верхняя булочка */}
        {selectedBun && (
          <div className={styles.constructorItem}>
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${selectedBun.name} (верх)`}
              price={selectedBun.price}
              thumbnail={selectedBun.image}
            />
          </div>
        )}

        <div
          className={combineScrollbarClass(
            styles.constructorItemsCenter,
            "default"
          )}
        >
          {ingredients.map((item) => (
            <div key={item._id} className={styles.draggableItem}>
              <div className={styles.dragIcon}>
                <DragIcon type="primary" />
              </div>
              <ConstructorElement
                text={item.name}
                price={item.price}
                thumbnail={item.image}
                handleClose={() => {}}
              />
            </div>
          ))}
        </div>

        {/* Нижняя булочка */}
        {selectedBun && (
          <div className={styles.constructorItem}>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${selectedBun.name} (низ)`}
              price={selectedBun.price}
              thumbnail={selectedBun.image}
            />
          </div>
        )}
      </div>

      {/* Итого и кнопка заказа */}
      <div className={styles.priceSection}>
        <div className={styles.priceContainer}>
          <span className={styles.price}>{totalPrice}</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={() => console.log("Заказ оформлен!")}
        >
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

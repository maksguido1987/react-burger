import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { Ingredient } from "../burger-ingredients/lib/types";
import { Modal } from "../modal";
import styles from "./BurgerConstructor.module.css";
import { combineScrollbarClass } from "../../utils/scrollbar-classes";

interface BurgerConstructorProps {
  ingredients: Ingredient[];
}

export const BurgerConstructor = ({ ingredients }: BurgerConstructorProps) => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  // Выбираем первую доступную булочку
  const selectedBun = ingredients.find((item) => item.type === "bun");

  const totalPrice =
    ingredients.reduce((sum, item) => sum + item.price, 0) +
    (selectedBun ? selectedBun.price * 2 : 0);

  const handleOrderClick = () => {
    setIsOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setIsOrderModalOpen(false);
  };

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
          onClick={handleOrderClick}
        >
          Оформить заказ
        </Button>
      </div>

      {isOrderModalOpen && (
        <Modal title="Заказ оформлен!" onClose={handleCloseOrderModal}>
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <p className="text text_type_main-medium">
              Ваш заказ успешно оформлен!
            </p>
            <p className="text text_type_main-default text_color_inactive">
              Номер заказа: #{Math.floor(Math.random() * 100000)}
            </p>
            <p className="text text_type_main-default text_color_inactive">
              Общая стоимость: {totalPrice} 💎
            </p>
          </div>
        </Modal>
      )}
    </section>
  );
};

import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { mockData } from "../../utils/data";
import styles from "./BurgerConstructor.module.css";

export const BurgerConstructor = () => {
  // Моковые данные для демонстрации
  const selectedBun = mockData.find((item) => item.type === "bun");
  const constructorItems = [
    mockData.find((item) => item._id === "60666c42cc7b410027a1a9b5"),
    mockData.find((item) => item._id === "60666c42cc7b410027a1a9b6"),
    mockData.find((item) => item._id === "60666c42cc7b410027a1a9b7"),
    mockData.find((item) => item._id === "60666c42cc7b410027a1a9b4"),
    mockData.find((item) => item._id === "60666c42cc7b410027a1a9b9"),
    mockData.find((item) => item._id === "60666c42cc7b410027a1a9bb"),
    mockData.find((item) => item._id === "60666c42cc7b410027a1a9bd"),
    mockData.find((item) => item._id === "60666c42cc7b410027a1a9b3"),
    mockData.find((item) => item._id === "60666c42cc7b410027a1a9bf"),
    mockData.find((item) => item._id === "60666c42cc7b410027a1a9ba"),
  ].filter(Boolean) as typeof mockData;

  const totalPrice =
    constructorItems.reduce((sum, item) => sum + item.price, 0) +
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

        <div className={styles.constructorItemsCenter}>
          {constructorItems.map((item) => (
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

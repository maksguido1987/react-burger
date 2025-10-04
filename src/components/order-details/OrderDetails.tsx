import {
  mockOrderData,
  getOrderStatusText,
  getOrderInstruction,
} from "./mockData";
import styles from "./OrderDetails.module.css";

interface OrderDetailsProps {
  orderNumber?: string;
  status?: "created" | "pending" | "done";
}

export const OrderDetails = ({
  orderNumber = mockOrderData.orderNumber,
  status = mockOrderData.status,
}: OrderDetailsProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.orderNumber}>{orderNumber}</div>
      <p className="text text_type_main-medium text_color_inactive">
        идентификатор заказа
      </p>

      <div className={styles.statusIcon}>
        <div className={styles.checkmarkIcon}>✓</div>
      </div>

      <p className="text text_type_main-medium">{getOrderStatusText(status)}</p>
      <p className="text text_type_main-default text_color_inactive">
        {getOrderInstruction(status)}
      </p>
    </div>
  );
};

// Моковые данные для заказов
// В будущем эти данные будут приходить с сервера

export interface OrderData {
  orderNumber: string;
  status: "created" | "pending" | "done";
  createdAt: string;
  totalPrice: number;
}

export const mockOrderData: OrderData = {
  orderNumber: "034536",
  status: "pending",
  createdAt: new Date().toISOString(),
  totalPrice: 21253,
};

// Функция для генерации случайного номера заказа
export const generateOrderNumber = (): string => {
  return Math.floor(Math.random() * 1000000)
    .toString()
    .padStart(6, "0");
};

// Функция для получения текста статуса заказа
export const getOrderStatusText = (status: OrderData["status"]): string => {
  switch (status) {
    case "created":
      return "Ваш заказ создан";
    case "pending":
      return "Ваш заказ начали готовить";
    case "done":
      return "Ваш заказ готов";
    default:
      return "Статус заказа неизвестен";
  }
};

// Функция для получения инструкции по статусу
export const getOrderInstruction = (status: OrderData["status"]): string => {
  switch (status) {
    case "created":
      return "Ожидайте подтверждения заказа";
    case "pending":
      return "Дождитесь готовности на орбитальной станции";
    case "done":
      return "Заберите заказ на орбитальной станции";
    default:
      return "";
  }
};

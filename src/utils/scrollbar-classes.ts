// Утилиты для применения кастомных скроллбаров

export const scrollbarClasses = {
  // Основной кастомный скроллбар (темная тема)
  default: "custom-scrollbar",

  // Светлая тема
  light: "custom-scrollbar-light",

  // Тонкий скроллбар
  thin: "custom-scrollbar-thin",
} as const;

export type ScrollbarVariant = keyof typeof scrollbarClasses;

// Функция для комбинирования классов модуля CSS с классом скроллбара
export const combineScrollbarClass = (
  moduleClass: string,
  variant: ScrollbarVariant = "default"
): string => {
  return `${moduleClass} ${scrollbarClasses[variant]}`;
};

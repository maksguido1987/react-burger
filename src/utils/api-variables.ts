export const API_BASE_URL = "https://norma.nomoreparties.space/api";

export const API_ENDPOINTS = {
  INGREDIENTS: "/ingredients",
} as const;

export const INGREDIENTS_URL = `${API_BASE_URL}${API_ENDPOINTS.INGREDIENTS}`;

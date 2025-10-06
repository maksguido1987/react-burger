import { useState, useEffect } from "react";
import { Ingredient } from "../components/burger-ingredients/lib/types";
import { INGREDIENTS_URL } from "../utils/api-variables";

interface UseIngredientsResult {
  ingredients: Ingredient[];
  isLoading: boolean;
  error: string | null;
}

export const useIngredients = (): UseIngredientsResult => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(INGREDIENTS_URL);

        if (!response.ok) {
          throw new Error(
            `Ошибка загрузки данных: ${response.status} ${response.statusText}`
          );
        }

        const data = await response.json();

        if (data.success && Array.isArray(data.data)) {
          setIngredients(data.data);
        } else {
          throw new Error("Неверный формат данных от API");
        }
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Произошла неизвестная ошибка";
        setError(errorMessage);
        console.error("Ошибка при загрузке ингредиентов:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchIngredients();
  }, []);

  return { ingredients, isLoading, error };
};

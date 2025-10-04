import "./App.css";
import { AppHeader, BurgerIngredients, BurgerConstructor } from "./components";
import { useIngredients } from "./hooks";

function App() {
  const { ingredients, isLoading, error } = useIngredients();

  return (
    <div className="app">
      <AppHeader />
      <main className="main">
        <div className="content">
          {isLoading && (
            <p className="text text_type_main-medium">
              Загрузка ингредиентов...
            </p>
          )}
          {error && (
            <p className="text text_type_main-medium text_color_error">
              Ошибка загрузки данных: {error}
            </p>
          )}
          {!error && !isLoading && (
            <>
              <BurgerIngredients ingredients={ingredients} />
              <BurgerConstructor ingredients={ingredients} />
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;

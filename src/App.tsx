import "./App.css";
import { AppHeader, BurgerIngredients, BurgerConstructor } from "./components";

function App() {
  return (
    <div className="app">
      <AppHeader />
      <main className="main">
        <div className="content">
          <BurgerIngredients />
          <BurgerConstructor />
        </div>
      </main>
    </div>
  );
}

export default App;

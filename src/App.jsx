import "./App.css";
import { DrinkButtons } from "./components/DrinkButtons";

export const App = () => {
  const greeter =
    "Greetings valued customer. Would you like something to drink?";

  return (
    <main>
      <h1>{greeter}</h1>
      <DrinkButtons />
    </main>
  );
};

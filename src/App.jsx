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

// function App(){
// const greeting = "Welcome to this website";
// const description = <p>This app is going to change your life.</p>;

// return (
//   <div className="App">
//     <h1>Welcome</h1>
//     <p>{greeting}</p>
//     {description}
//   </div>
// );
// }

// export default App;

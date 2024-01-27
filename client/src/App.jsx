import { useState } from "react";
import viteLogo from "/vite.svg";

//Components
import InputTodo from "./components/InputTodos";
import ListTodos from "./components/ListTodos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="">
        <InputTodo />
        <ListTodos />
      </div>
    </>
  );
}

export default App;

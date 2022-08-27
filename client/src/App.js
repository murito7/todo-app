import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

function App() {
  return (
    <div className="w-[90%] sm:w-[600px] xl:w-[800px] mx-auto">
      {" "}
      <h1 className="mt-20 text-3xl tracking-wider text-center font-bold ">
        PERN stack Todo App
      </h1>
      <InputTodo />
      <ListTodos />
    </div>
  );
}

export default App;

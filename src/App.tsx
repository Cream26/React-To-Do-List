import { Todo } from "./types";
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const addTodo = (text: string) => {
    const newTodo: Todo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id: number, newText: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completeAll = () => {
    setTodos(todos.map((todo) => ({ ...todo, completed: true })));
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredTodos = todos
    .filter((todo) => {
      if (filter === "active") return !todo.completed;
      if (filter === "completed") return todo.completed;
      return true;
    })
    .filter((todo) =>
      todo.text.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="h-2/3 w-1/2 bg-slate-200 p-4 rounded-lg shadow-lg overflow-auto">
        <h1 className="font-bold text-5xl text-center font-serif">
          To-Do-List
        </h1>
        <TodoForm addTodo={addTodo} />
        <TodoFilter
          filter={filter}
          setFilter={setFilter}
          completeAll={completeAll}
          handleSearch={handleSearch}
        />
        <TodoList
          todos={filteredTodos}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;

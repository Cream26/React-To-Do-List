import TodoItem from "./TodoItems";
import { Todo } from "../types";

interface TodoListProps {
    todos: Todo[];
    toggleTodo: (id: number) => void;
    editTodo: (id: number, newText: string) => void;
    deleteTodo: (id: number) => void;
    
}
function TodoList({ todos, toggleTodo, editTodo, deleteTodo }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
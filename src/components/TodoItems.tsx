import { Todo } from "../types";
import { useState } from "react";

// 定义TodoItemProps接口，包含todo、toggleTodo、editTodo、deleteTodo四个属性
interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
  deleteTodo: (id: number) => void;
}

function TodoItem({ todo, toggleTodo, editTodo, deleteTodo }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    editTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <>
      <div className="mt-3 flex justify-between items-center border bg-slate-300 p-2 rounded">
        <li className="flex items-center">
          {isEditing ? (
            <input
              type="text"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              onBlur={handleEdit}
              className="p-2 rounded-lg border border-slate-300 "
            />
          ) : (
            <span className={todo.completed ? "line-through" : ""}>
              {todo.text}
            </span>
          )}
        </li>
        <div className="flex items-center">
          <button
            className="p-2 bg-blue-500 text-white rounded mr-2"
            onClick={() => toggleTodo(todo.id)}
          >
            切换
          </button>
          <button
            className="p-2 bg-blue-500 text-white rounded mr-2"
            onClick={() => setIsEditing(true)}
          >
            编辑
          </button>
          <button
            className="p-2 bg-red-500 text-white rounded"
            onClick={() => deleteTodo(todo.id)}
          >
            删除
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoItem;

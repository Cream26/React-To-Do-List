import { useState } from "react";

interface TodoFormProps {
    addTodo: (text: string) => void;
    
}
function TodoForm({ addTodo }: TodoFormProps) {
  const [text, setText] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!text.trim()) {
            alert("待办内容不能为空！");
            return;
        }
        addTodo(text);
        setText("");
    };

  return (
    <>
      <form
        className="mt-3 flex justify-center items-center "
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="添加一个新的待办..."
          className="w-2/3 p-2 rounded-lg border border-slate-300 "
        />
        <button className="w-1/6 bg-green-500 p-2 rounded-lg m-2">
          添加待办
        </button>
      </form>
      
    </>
  );
}

export default TodoForm;

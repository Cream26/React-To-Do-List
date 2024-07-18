// src/components/TodoFilter.tsx
import { useState } from "react";

interface TodoFilterProps {
  filter: string;
  setFilter: (filter: string) => void;
  completeAll: () => void;
  handleSearch: (query: string) => void;
}

function TodoFilter({
  filter,
  setFilter,
  completeAll,
  handleSearch,
}: TodoFilterProps) {
  const [query, setQuery] = useState("");

  return (
    <div className=" mt-3 flex justify-around items-center">
      <div>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded mr-2"
        >
          <option value="all">全部</option>
          <option value="active">未完成</option>
          <option value="completed">已完成</option>
        </select>
        <button
          onClick={completeAll}
          className="p-2 bg-blue-500 text-white rounded"
        >
          全部完成
        </button>
      </div>
      <div className="flex">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 rounded-lg border border-slate-300 mr-2"
        />
        <button
          onClick={() => handleSearch(query)}
          className="p-2 bg-blue-500 text-white rounded"
        >
          查找
        </button>
      </div>
    </div>
  );
}

export default TodoFilter;

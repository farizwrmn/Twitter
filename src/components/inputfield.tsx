import React, { useRef } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

function InputField({ todo, setTodo, handleAdd }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <form
        className="bg-slate-500 p-4 flex justify-between gap-3 rounded-md"
        onSubmit={(e) => {
          handleAdd(e);
          inputRef.current?.blur;
        }}
      >
        <input
          ref={inputRef}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="input"
          placeholder="Write here.."
          className="border border-gray-300 focus:border-blue-500 rounded-lg px-4 py-2 outline-none w-full"
        />
        <button
          id="button"
          className="bg-orange-300 hover:bg-cyan-400 text-slate-600 font-bold py-2 px-8 rounded-[6px] w-[110px]"
          type="submit"
          onClick={() => {
            if (todo.length > 50) {
              alert(`Characters must be lower than 50!`);
            }
          }}
        >
          Tweet
        </button>
      </form>
      <div>
        <p>Characters: {todo.length}</p>
      </div>
    </>
  );
}

export default InputField;

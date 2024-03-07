import { useState, useEffect } from "react";
import { List } from "../../pages/list/list";

export default function Form() {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);
  const [list, setList] = useState<any[]>([]);
  const handleChange = (e: any) => {
    setInput(e);
  };

  const addTask = (): void => {
    const data = {
      title: input,
      status: false,
    };
    if (input !== "") {
      setList([...list, data]);
      setInput("");
    }
  };

  const handleClick = (e: any) => {
    const data = list.filter((item) => item.title !== e);
    setList(data);
  };

  useEffect(() => {
    console.log(list);
  }, [list]);

  const handleStatusChange = (status: any, name: any) => {
    const index = list.findIndex((data) => data.title === name);
    list[index].status = !status;
    setList([...list]);
  };

  useEffect(() => {
    const data = list.filter((item) => item.status === true);
    setCount(data.length);
  }, [list]);

  return (
    <>
      <form className="bg-cyan-500 p-4 flex justify-center gap-3 rounded-md">
        <input
          type="text"
          className="border border-gray-300 focus:border-blue-500 rounded-lg px-4 py-2 outline-none"
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Write here.."
          value={input}
        />
        <button
          type="button"
          onClick={addTask}
          className="bg-blue-300 hover:bg-cyan-400 text-slate-600 font-bold py-2 px-8 rounded-[6px] w-[100px]"
        >
          Tweet
        </button>
      </form>
      <div className="text-center mt-3">Characters: {input.length}</div>
      {list?.map((item, i) => (
        <List
          key={i}
          title={item.title}
          done={item.status}
          onStatusChange={() => handleStatusChange(item.status, item.title)}
          onClick={() => handleClick(item.title)}
        />
      ))}
    </>
  );
}

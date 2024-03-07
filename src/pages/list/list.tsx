interface hjhjh {
  title: string;
  onClick: any;
  done: boolean;
  onStatusChange: any;
}
export const List: React.FC<hjhjh> = ({ title, onClick }) => {
  return (
    <div className="flex my-2 border-b-2 pb-2 px-3 text-middle mx-auto">
      <div className="flex space-x-4 text-middle">
        <div className="text-bold text-center border-2 border-green rounded-md px-3 py-2">
          {title}
        </div>
      </div>
      <button className="cursor-pointer text-lightgreen-500 border-2 border-green-500 hover:bg-green-200 rounded-md px-3 py-2">
        Edit
      </button>
      <button
        onClick={onClick}
        className="cursor-pointer text-red-500 border-2 border-red-500 hover:bg-red-200 rounded-md px-3 py-2"
      >
        Delete
      </button>
    </div>
  );
};


export default function Square({ value }) {
  function handleClick() {}
  return (
    <button
      onClick={handleClick}
      className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg"
    >
      {value}
    </button>
  );
}

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../features/counter";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <section className="bg-white sm:w-sm md:w-md lg:w-md rounded-2xl shadow-lg p-8">
      {/* Title */}
      <p className="text-2xl font-bold text-gray-800 text-center">
        Counter App
      </p>
      <hr className="my-4 border-gray-200" />

      {/* Increment & Decrement Buttons */}
      <section className="flex items-center justify-center gap-6 mt-4">
        <button
          onClick={() => dispatch(increment())}
          className="text-2xl text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 h-12 w-12 rounded-full shadow-md cursor-pointer"
        >
          +
        </button>

        <p className="text-3xl font-bold text-gray-800 w-12 text-center">
          {count}
        </p>

        <button
          onClick={() => dispatch(decrement())}
          className="text-2xl text-white bg-red-600 hover:bg-red-700 transition-colors duration-200 h-12 w-12 rounded-full shadow-md disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          disabled={count === 0}
        >
          -
        </button>
      </section>

      {/* Reset Button */}
      <section className="flex items-center justify-center">
        <button
          className="bg-red-500 p-2 mt-5 flex items-center justify-center w-50 rounded-md text-white text-xl cursor-pointer hover:bg-red-700 shadow-md"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </section>
    </section>
  );
};

export default Counter;

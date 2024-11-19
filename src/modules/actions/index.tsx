import useActionsStore, { increase, decrease } from "./useActionsStore";

function Actions() {
  const { count } = useActionsStore();

  return (
    <div>
      <p>actions works!</p>

      <div className="m-3">
        <p className="font-bold">Counter value: {count}</p>
      </div>

      <div className="m-3 p-2 border-2 rounded-md flex gap-4">
        <button className="font-semibold border-2 p-2 rounded-md" onClick={() => increase()}>
          Increase
        </button>

        <button className="font-semibold border-2 p-2 rounded-md" onClick={() => decrease()}>
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Actions;
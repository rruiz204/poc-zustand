import useSlicesStore from "./useSlicesStore";

function Slices() {
  const { bears, addBear, fishes, addFish } = useSlicesStore();

  return (
    <div>
      <p>slices works!</p>

      <div className="m-3">
        <p className="font-semibold">Bears: {bears}</p>
        <p className="font-semibold">Fishes: {fishes}</p>
      </div>

      <div className="m-3 p-2 border-2 rounded-md flex gap-5">
        <button className="font-semibold border-2 p-2 rounded-md" onClick={() => addBear()}>
          Add Bears
        </button>

        <button className="font-semibold border-2 p-2 rounded-md" onClick={() => addFish()}>
          Add Fishes
        </button>
      </div>
    </div>
  );
};

export default Slices;
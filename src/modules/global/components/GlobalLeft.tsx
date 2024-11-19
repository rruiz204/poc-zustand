import useGlobalStore from "../useGlobalStore";

function GlobalLeft() {
  const { randomText } = useGlobalStore();

  return (
    <div>
      <p>global left works!</p>
      <p>The value of text is: {randomText}</p>
    </div>
  );
};

export default GlobalLeft;
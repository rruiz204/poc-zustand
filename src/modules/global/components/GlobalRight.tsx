import useGlobalStore from "../useGlobalStore";

function GlobalRight() {
  const { randomText } = useGlobalStore();

  return (
    <div>
      <p>global right works!</p>
      <p>The value of text is: {randomText}</p>
    </div>
  );
};

export default GlobalRight;
import { useState } from "react";

const Counting2 = () => {
  const [count, setCount] = useState(0);
  const [merdeka, setMerdeka] = useState(true);

  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <div>Counting 2</div>
      <div>{count}</div>
      <div>{merdeka.toString()}</div>
      <button
        onClick={() => {
          setCount(count + 1);
          setMerdeka(!merdeka);
        }}
      >
        Tambah
      </button>
      <button
        onClick={() => {
            if (count > 0) {
          setCount(count - 1);
          setMerdeka(!merdeka);
        }
    }
}
      >
        Kurang
      </button>
    </div>
  );
};

export default Counting2;

import React, { useEffect, useState } from "react";

function FunctionComponent(props) {
  const [count, setCount] = useState(props.count);

  useEffect(() => {
    console.log("Component Mounted/Updated");
  }, [count]);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Function Component count - {count}</p>
      <button type="button" onClick={handleClick}>
        Click
      </button>
    </div>
  );
}

export default FunctionComponent;

import React, { useContext } from "react";
import { Context } from "./Store";
const Component1 = () => {
  const [state, setState] = useContext(Context);
  async function handleClick() {
    if (state.name === "Aman Raj")
      setState({ name: "Aman Raj 1", email: "amanraj222165@gmail.com" });
    else {
      setState({ name: "Aman Raj", email: "amanraj6437@gmail.com" });
    }
  }
  return (
    <>
      <h2>Global Context Component</h2>
      <p>Name: {state.name}</p>
      <p>Email: {state.email}</p>
      <button onClick={handleClick}>Change Data</button>
    </>
  );
};

export default Component1;

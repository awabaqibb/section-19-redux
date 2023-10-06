import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterAction } from "../store/counter";

const Counter = () => {
  const ref = useRef(5);

  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.show);

  const incrementHandler = () => {
    dispatch(counterAction.increment());
  };

  const incrementByHandler = () => {
    dispatch(counterAction.increaseBy(ref.current));
  };

  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementByHandler}>Increase by {ref.current}</button>
      </div>
    </main>
  );
};

export default Counter;

import { useDispatch } from "react-redux";
import { decrement, increment } from "../redux/slices/counterSlice";

const CounterActions = () => {
  const dispatch = useDispatch();

  const handleDecrementClick = () => {
    dispatch(decrement());
  };

  const handleIncrementClick = () => {
    dispatch(increment());
  };

  return (
    <section>
      <div>
        <button onClick={handleDecrementClick} >Disminuir</button>
        <button onClick={handleIncrementClick}>Aumentar</button>
      </div>
    </section>
  );
};

export default CounterActions;
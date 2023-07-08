import { useSelector } from "react-redux";

const CounterValue = () => {
  const { value } = useSelector(state => state.counter);

  return (
    <span>{value}</span>
  );
}

export default CounterValue;
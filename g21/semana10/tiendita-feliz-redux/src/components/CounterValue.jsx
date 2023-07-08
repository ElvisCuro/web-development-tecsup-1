import useCounter from "../hooks/useCounter";

const CounterValue = () => {
  const { value } = useCounter();

  return (
    <span>{value}</span>
  );
}

export default CounterValue;
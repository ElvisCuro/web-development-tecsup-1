import { useSelector } from "react-redux";

const useCounter = () => {
  return useSelector(state => state.counter);
};

export default useCounter;
import { countStore } from '../store/store';
const Counter = () => {
  const { count, increase, decrease } = countStore();

  return (
    <>
      <button onClick={() => increase()}>+버튼</button>
      <button onClick={() => decrease()}>-버튼</button>
      {count}
    </>
  );
};
export default Counter;

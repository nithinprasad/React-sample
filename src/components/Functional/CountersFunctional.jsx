import { useDispatch, useSelector } from "react-redux";
import { resetAll } from "../../state/actions";
import CounterFun from "./CounterFunctional";
const CountersFun = () => {
  const state = useSelector((state) => state.counters);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => dispatch(resetAll())}
      >
        Reset
      </button>
      {state.map((counter) => (
        <CounterFun
          key={counter.id}
          id={counter.id}
          value={counter.value}
        ></CounterFun>
      ))}
    </div>
  );
};

export default CountersFun;

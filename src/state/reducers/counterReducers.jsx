const initialState =  [
    { id: 1, value: 0 },
    { id: 2, value: 1 },
    { id: 3, value: 2 },
    { id: 4, value: 3 },
  ]
;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return handleIncrement(state, action.payload);
    case "DECREMENT":
      return handleDecrement(state, action.payload);
    case "RESET":
      return handleReset(state);
    case "DELETE":
      return handleDelete(state, action.payload);
    default:
      return state;  
  }
};

export default reducer;

const handleDelete = (counters, product) => {
  console.log(product);
  let countersNew = counters.filter((each) => each.id !== product);
  return countersNew;
};

const handleReset = (counters) => {
  let countersNew = counters.map((c) => {
    c.value = 0;
    return c;
  });
  console.log(countersNew);
  return countersNew;
};

const handleIncrement = (counters, product) => {
  let countersNew = [...counters];
  let index = countersNew.findIndex((item) => item.id === product);
  countersNew[index].value++;
  return countersNew;
};

const handleDecrement = (counters, product) => {
  let countersNew = [...counters];
  let index = countersNew.findIndex((item) => item.id === product);
  countersNew[index].value--;
  return countersNew;
};

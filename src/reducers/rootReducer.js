const inititalState = {
  counter: 0,
};

const RootReducer = (state = inititalState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state.counter + 1;
    case "DECREMENT":
      return state.counter - 1;
    default:
      return state;
  }
};

export default RootReducer;

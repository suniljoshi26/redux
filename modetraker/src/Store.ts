import { createStoreHook } from "react-redux";
import { Action, createStore } from "redux";

export type State = {
  sadCount: number;
  happyCount: number;
};
const initalState = {
  sadCount: 0,
  happyCount: 0,
};

function reducer(currentState: State = initalState, action: Action): State {
  if (action.type === "happy button clicked") {
    return { ...currentState, happyCount: currentState.happyCount + 1 };
  } else if (action.type === "Sad button clicked") {
    return { ...currentState, sadCount: currentState.sadCount + 1 };
  }
  return currentState;
}

const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;

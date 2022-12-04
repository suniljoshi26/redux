import { createStoreHook } from "react-redux";
import { Action, AnyAction, createStore } from "redux";

export type State = {
  sadCount: number;
  happyCount: number;
};
const initalState = {
  sadCount: 0,
  happyCount: 0,
};

function reducer(currentState: State = initalState, action: AnyAction): State {
  if (action.type === "happy button clicked") {
    return {
      ...currentState,
      happyCount: currentState.happyCount + action.payload,
    };
  } else if (action.type === "Sad button clicked") {
    return {
      ...currentState,
      sadCount: currentState.sadCount + action.payload,
    };
  }
  return currentState;
}

const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;

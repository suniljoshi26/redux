import { createStoreHook } from "react-redux";
import { Action, AnyAction, createStore } from "redux";
import { HAPPY_BUTTON_CLICKED, SAD_BUTTON_CLICKED } from "./Actions";

type Moment = {
  intensity: number;
  when: Date;
};

export type State = {
  sadMoments: Moment[];
  happyMoments: Moment[];
};
const initalState = {
  sadMoments: [],
  happyMoments: [],
};

function reducer(currentState: State = initalState, action: AnyAction): State {
  switch (action.type) {
    case HAPPY_BUTTON_CLICKED:
      return {
        ...currentState,
        happyMoments: [
          ...currentState.happyMoments,
          { intensity: action.payload, when: new Date() },
        ],
      };
    case SAD_BUTTON_CLICKED:
      return {
        ...currentState,
        sadMoments: [
          ...currentState.sadMoments,
          { intensity: action.payload, when: new Date() },
        ],
      };
    case "clearButtonClicked":
      return {
        sadMoments: [],
        happyMoments: [],
      };
    default:
      return currentState;
  }
  //   if (action.type === "happy button clicked") {
  //     return {
  //       ...currentState,
  //       happyCount: currentState.happyCount + action.payload,
  //     };
  //   } else if (action.type === "Sad button clicked") {
  //     return {
  //       ...currentState,
  //       sadCount: currentState.sadCount + action.payload,
  //     };
  //   }
}

const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;

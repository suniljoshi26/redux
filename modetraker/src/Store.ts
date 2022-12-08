import { AnyAction, createStore } from "redux";
import { HAPPY_BUTTON_CLICKED, SAD_BUTTON_CLICKED } from "./Actions";
import HappyIncrement from "./HappyIncrement";
import HappyReduser, {
  HappyState,
  initialHappyState,
} from "./reducers/HappyReduser";
import SadReduser, { initialSadState, sadState } from "./reducers/sadReduser";

export type Moment = {
  intensity: number;
  when: Date;
};

export type State = {
  sad: sadState;
  happy: HappyState;
};
const initalState: State = {
  sad: initialSadState,
  happy: initialHappyState,
};

function reducer(currentState = initalState, action: AnyAction): State {
  return {
    sad: SadReduser(currentState.sad, action),
    happy: HappyReduser(currentState.happy, action),
  };

  // switch (action.type) {
  //   case HAPPY_BUTTON_CLICKED:
  //     return {
  //       ...currentState,
  //       happyMoments: [
  //         ...currentState.happyMoments,
  //         { intensity: action.payload.count, when: action.payload.when },
  //       ],
  //     };
  //   case SAD_BUTTON_CLICKED:
  //     return {
  //       ...currentState,
  //       sadMoments: [
  //         ...currentState.sadMoments,
  //         { intensity: action.payload.count, when: action.payload.when },
  //       ],
  //     };
  //   case "clear button":
  //     return {
  //       sadMoments: [],
  //       happyMoments: [],
  //     };
  //   default:
  //     return currentState;
  // }
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

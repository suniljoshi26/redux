import { combineReducers, createStore } from "redux";
import HappyReduser from "./reducers/HappyReduser";
import orderReduser from "./reducers/Orders";
import productreducer from "./reducers/product";
import SadReduser from "./reducers/SadReduser";

export type Moment = {
  intensity: number;
  when: Date;
};

// export type State = {
//   sad: sadState;
//   happy: HappyState;
// };
// const initalState: State = {
//   sad: initialSadState,
//   happy: initialHappyState,
// };

const reducer = combineReducers({
  happy: HappyReduser,
  sad: SadReduser,
  products: productreducer,
  orders: orderReduser,
});
export type State = ReturnType<typeof reducer>;

// function reducer2(currentState = initalState, action: AnyAction): State {
//   return {
//     sad: SadReduser(currentState.sad, action),
//     happy: HappyReduser(currentState.happy, action),
//   };

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
//}

const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;

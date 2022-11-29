import { State } from "./Store";

export function happyCountSelectoe(state: State) {
  return state.happyCount;
}

export function sadCountSelectoe(state: State) {
  return state.sadCount;
}

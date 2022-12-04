import { State } from "./Store";

export function happyMomentsSelectoe(state: State) {
  return state.happyMoments;
}

export function sadMomentsSelectoe(state: State) {
  return state.sadMoments;
}

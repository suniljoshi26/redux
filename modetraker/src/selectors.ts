import { State } from "./Store";

export function happyMomentsSelectoe(state: State) {
  return state.happy.HappyMoment;
}

export function sadMomentsSelectoe(state: State) {
  return state.sad.sadMoment;
}

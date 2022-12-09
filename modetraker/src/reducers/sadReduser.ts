import { AnyAction } from "redux";
import { CLEAR_BUTTON_CLICKED, SAD_BUTTON_CLICKED } from "../Actions";
import { Moment } from "../Store";

export type sadState = {
  sadMoment: Moment[];
};
export const initialSadState = {
  sadMoment: [],
};

function SadReduser(currentSadState: sadState, action: AnyAction) {
  switch (action.type) {
    case SAD_BUTTON_CLICKED:
      return {
        ...currentSadState,
        sadMoment: [
          ...currentSadState.sadMoment,
          {
            intensity: action.payload.count,
            when: action.payload.when,
          },
        ],
      };
    case CLEAR_BUTTON_CLICKED:
      return {
        sadMoment: [],
      };
    default:
      return currentSadState;
  }
}

export default SadReduser;

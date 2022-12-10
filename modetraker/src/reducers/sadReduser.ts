import { AnyAction } from "redux";
import { CLEAR_BUTTON_CLICKED, SAD_BUTTON_CLICKED } from "../Actions";
import { Moment } from "../Store";
import produce from "immer";

export type SadState = {
  SadMoment: Moment[];
};
export const initialSadState: SadState = {
  SadMoment: [],
};

function SadReduser(
  currentSadState = initialSadState,
  action: AnyAction
): SadState {
  switch (action.type) {
    case SAD_BUTTON_CLICKED:
      return produce(currentSadState, (draft) => {
        draft.SadMoment.push(action.payload);
      });

    // return {
    //   ...currentSadState,
    //   SadMoment: [
    //     ...currentSadState.SadMoment,
    //     {
    //       intensity: action.payload.count,
    //       when: action.payload.when,
    //     },
    //   ],
    // };
    case CLEAR_BUTTON_CLICKED:
      return {
        SadMoment: [],
      };

    default:
      return currentSadState;
  }
}

export default SadReduser;

import produce from "immer";
import { AnyAction } from "redux";
import { CLEAR_BUTTON_CLICKED, HAPPY_BUTTON_CLICKED } from "../Actions";
import { Moment } from "../Store";

export type HappyState = {
  HappyMoment: Moment[];
};
export const initialHappyState: HappyState = {
  HappyMoment: [],
};

function HappyReduser(
  currentHappyState = initialHappyState,
  action: AnyAction
): HappyState {
  switch (action.type) {
    case HAPPY_BUTTON_CLICKED:
      // const newSed = {
      //   when: action.payload.when,
      //   intensity: action.payload.count,
      // };

      return produce(currentHappyState, (draft) => {
        draft.HappyMoment.push(action.payload);
      });
    // return {
    //   ...currentHappyState,
    //   HappyMoment: [
    //     ...currentHappyState.HappyMoment,
    //     {
    //       intensity: action.payload.count,
    //       when: action.payload.when,
    //     },
    //   ],
    // };
    case CLEAR_BUTTON_CLICKED:
      return {
        ...currentHappyState,
        HappyMoment: [],
      };
    default:
      return currentHappyState;
  }
}
export default HappyReduser;

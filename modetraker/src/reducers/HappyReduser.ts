import { AnyAction } from "redux";
import { HAPPY_BUTTON_CLICKED } from "../Actions";
import { Moment } from "../Store";

export type HappyState = {
  HappyMoment: Moment[];
};
export const initialHappyState: HappyState = {
  HappyMoment: [],
};

function HappyReduser(currentHappyState: HappyState, action: AnyAction) {
  switch (action.type) {
    case HAPPY_BUTTON_CLICKED:
      return {
        ...currentHappyState,
        HappyMoment: [
          ...currentHappyState.HappyMoment,
          {
            intensity: action.payload.count,
            when: action.payload.when,
          },
        ],
      };
    default:
      return currentHappyState;
  }
}
export default HappyReduser;

import { ActionCreater } from "./actions/index";
import { Moment } from "./Store";

export const HAPPY_BUTTON_CLICKED = "happy button clicked";
export const SAD_BUTTON_CLICKED = " Sad button clicked";
export const CLEAR_BUTTON_CLICKED = "clear button";
export const happyButtonClicked: ActionCreater<Moment> = (
  count: number,
  when: Date
) => ({
  type: HAPPY_BUTTON_CLICKED,
  payload: { intensity: count, when },
});
export const sadButtonClicked: ActionCreater<Moment> = (
  count: number,
  when: Date
) => ({
  type: SAD_BUTTON_CLICKED,
  payload: { intensity: count, when },
});
export const clearButtonClicked = () => ({
  type: CLEAR_BUTTON_CLICKED,
});

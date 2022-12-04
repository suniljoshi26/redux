export const HAPPY_BUTTON_CLICKED = "happy button clicked";
export const SAD_BUTTON_CLICKED = " Sad button clicked";

export const happyButtonClicked = (count: number) => ({
  type: HAPPY_BUTTON_CLICKED,
  payload: count,
});
export const sadButtonClicked = (count: number) => ({
  type: SAD_BUTTON_CLICKED,
  payload: count,
});

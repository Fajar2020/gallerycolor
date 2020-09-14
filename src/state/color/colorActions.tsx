import { Dispatch } from "redux";
import {
  GET_COLORS,
  ADJUST_COLORS,
  COLORS_LOADING,
  COLORS_FAIL,
  ColorDispatchTypes,
} from "./colorTypes";

import { CategoryColor } from "../../models/categoryColor";
import { Color } from "../../models/color";
import { dataColors } from "./dataColor";

export const getColors = () => async (
  dispatch: Dispatch<ColorDispatchTypes>
) => {
  try {
    dispatch({ type: COLORS_LOADING });
    dispatch({
      type: GET_COLORS,
      payload: dataColors,
    });
  } catch (e) {
    dispatch({
      type: COLORS_FAIL,
    });
  }
};

export const adjustColors = (dataAdjust: any) => async (
  dispatch: Dispatch<ColorDispatchTypes>
) => {
  try {
    dispatch({ type: COLORS_LOADING });
    let updatedData = dataColors;

    if (dataAdjust.saturated === "1" && dataAdjust.category === "0") {
      updatedData = dataColors;
    } else {
      if (dataAdjust.category !== "0") {
        // if the payload said 0 mean as for the initial value
        updatedData = updatedData.filter(
          (item: CategoryColor) => item.id === parseInt(dataAdjust.category)
        );
      }

      if (dataAdjust.saturated === "2") {
        updatedData.forEach((element: CategoryColor) => {
          element.childColor = element.childColor.filter(
            //saturated from color will depend of value from option whather used saturated and the darker
            (item: Color) => item.saturated === dataAdjust.darker
          );
          console.log(element.childColor);
        });
        console.log(updatedData);
      }
    }
    dispatch({
      type: ADJUST_COLORS,
      payload: updatedData,
    });
  } catch (e) {
    dispatch({
      type: COLORS_FAIL,
    });
  }
};

import { CategoryColor } from "../../models/categoryColor";
import { Color } from "../../models/color";
import {
  GET_COLORS,
  ADJUST_COLORS,
  COLORS_LOADING,
  ColorDispatchTypes,
} from "./colorTypes";

interface DefaultStateI {
  loading: boolean;
  colors: CategoryColor[];
}

const defaultState: DefaultStateI = {
  loading: false,
  colors: [],
};

const colorReducer = (
  state: any = defaultState,
  action: ColorDispatchTypes
) => {
  let updatedData;
  switch (action.type) {
    case GET_COLORS:
    case ADJUST_COLORS:
      // get data from static file
      return {
        ...state,
        colors: action.payload,
        loading: false,
      };
    case COLORS_LOADING:
      return {
        ...state,
        loading: true,
      };
    default: {
      return state;
    }
  }
};

export default colorReducer;

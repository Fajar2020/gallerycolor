import { CategoryColor } from "../../models/categoryColor";

export const GET_COLORS = "GET_COLORS";
export const ADJUST_COLORS = "ADJUST_COLORS";
// export const CHANGE_SATURATION = "CHANGE_SATURATION";

export const COLORS_LOADING = "COLORS_LOADING";
export const COLORS_FAIL = "COLORS_FAIL";

export interface ColorsLoading {
  type: typeof COLORS_LOADING;
}

export interface ColorsFail {
  type: typeof COLORS_FAIL;
}

export interface GetColors {
  type: typeof GET_COLORS;
  payload: CategoryColor[];
}

export interface AdjustColors {
  type: typeof ADJUST_COLORS;
  payload: CategoryColor[];
}

// export interface ChangeSaturation {
//   type: typeof CHANGE_SATURATION;
//   darker: boolean;
//   lighter: boolean;
// }

export type ColorDispatchTypes =
  | ColorsLoading
  | GetColors
  | AdjustColors
  | ColorsFail;

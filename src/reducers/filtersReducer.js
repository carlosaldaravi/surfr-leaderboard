import { getTodayDate } from "../helpers/dates";
import { PERIOD_TYPES } from "../types/period";

export const initialState = {
  country: {
    value: "",
    isValid: true,
  },
  spot: {
    value: "",
    isValid: true,
  },
  period: {
    value: PERIOD_TYPES.alltime,
    from: "",
    to: getTodayDate(),
  },
};
export const filtersReducer = (state, action) => {
  if (action.type === "LOCATION") {
    return {
      ...state,
      country: action.value,
    };
  }
  if (action.type === "PERIOD") {
    return {
      ...state,
      period: action.period,
    };
  }
  return {
    country: {
      value: "",
      isValid: true,
    },
    spot: {
      value: "",
      isValid: true,
    },
    period: {
      value: PERIOD_TYPES.alltime,
      from: "",
      to: "getTodayDate()",
    },
  };
};

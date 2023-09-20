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
  gender: {
    all: true,
    male: false,
    female: false,
  },
  boardType: {
    all: true,
    twintip: false,
    foil: false,
    snow: false,
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
  if (action.type === "GENDER") {
    return {
      ...state,
      gender: action.gender,
    };
  }
  if (action.type === "BOARD-TYPE") {
    return {
      ...state,
      boardType: action.boardType,
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
    gender: {
      all: true,
      male: false,
      female: false,
    },
    boardType: {
      all: true,
      twintip: false,
      foil: false,
      snow: false,
    },
  };
};

import { getDay, getWeek, getMonth } from "../helpers/dates";
import { GENDER_TYPES } from "../types/gender";

export const filtersOption = [
  {
    id: "period",
    name: "Period",
    options: [
      { value: "alltime", label: "All time", description: "" },
      { value: "daily", label: "Daily", description: getDay() },
      { value: "weekly", label: "Weekly", description: getWeek() },
      { value: "monthly", label: "Monthly", description: getMonth() },
      { value: "custom", label: "Custom", description: "" },
    ],
  },
  {
    id: "gender",
    name: "Gender",
    options: [
      { value: GENDER_TYPES.both, label: "Both", description: "" },
      { value: GENDER_TYPES.male, label: "Male", description: "" },
      { value: GENDER_TYPES.female, label: "Female", description: "" },
    ],
  },
  {
    id: "boardType",
    name: "Board Type",
    options: [
      { value: "all", label: "All", description: "" },
      { value: "twintip", label: "Twintip", description: "" },
      { value: "foil", label: "Foil", description: "" },
      { value: "snow", label: "Snow", description: "" },
    ],
  },
];

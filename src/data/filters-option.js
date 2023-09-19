import { getDay, getWeek, getMonth } from "../helpers/dates";

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
      { value: "all", label: "Both", description: "" },
      { value: "male", label: "Male", description: "" },
      { value: "female", label: "Female", description: "" },
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

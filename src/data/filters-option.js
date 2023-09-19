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
];

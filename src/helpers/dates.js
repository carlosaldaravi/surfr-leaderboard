const getTodayDate = () => {
  const today = new Date();
  const day = today.getDate().toString().padStart(2, "0");
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const year = today.getFullYear().toString();

  const formatedDate = `${year}-${month}-${day}`;
  return formatedDate;
};

const getDay = () => {
  const today = new Date();
  const options = { weekday: "long" };
  const dayOfWeek = today.toLocaleDateString("en-US", options);
  return dayOfWeek;
};
const getWeek = () => {
  const todayDate = new Date();
  const todayDay = todayDate.getDay();
  const firstWeekDay = new Date(
    todayDate.getFullYear(),
    todayDate.getMonth(),
    todayDate.getDate() - todayDay
  );
  const lastWeekDay = new Date(
    todayDate.getFullYear(),
    todayDate.getMonth(),
    todayDate.getDate() + (6 - todayDay)
  );

  const weekFormated = `From ${firstWeekDay.toLocaleDateString()} to ${lastWeekDay.toLocaleDateString()}`;
  console.log("weekFormated: ", weekFormated);
  return weekFormated;
};
const getMonth = () => {
  const today = new Date();
  const currentMonth = today.toLocaleString("en-US", { month: "long" });
  console.log("currentMonth: ", currentMonth);
  return currentMonth;
};

export { getTodayDate, getDay, getWeek, getMonth };

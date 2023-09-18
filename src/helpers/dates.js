const getTodayDate = () => {
  const today = new Date();
  const day = today.getDate().toString().padStart(2, "0");
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const year = today.getFullYear().toString();

  const formatedDate = `${year}-${month}-${day}`;
  return formatedDate
};

export { getTodayDate };

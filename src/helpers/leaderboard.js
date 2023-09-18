export const trophyClassColor = (pos) => {
  let className = "text-yellow-600";
  if (pos === 1) className = "text-yellow-300";
  if (pos === 2) className = "text-gray-500";
  return className;
};

export const isPodium = (pos) => {
  return pos === 1 || pos === 2 || pos === 3;
};

const Button = ({ children, active, onChangeLeaderboard }) => {
  return (
    <button
      className={`bg-primary text-center rounded-lg h-14 py-2 px-4 text-2xl transition-all ${
        !active ? "text-text" : "text-3xl"
      }`}
      onClick={() => onChangeLeaderboard({children})}
    >
      {children}
    </button>
  );
};

export default Button;

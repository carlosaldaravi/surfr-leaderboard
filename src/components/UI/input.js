const Input = ({ type = "text", placeholder, value, onChange }) => {
  return (
    <input
      className={`bg-transparent border-none rounded-lg focus:outline-none focus:border-none text-2xl ${
        value === "" && "italic"
      }`}
      type={type}
      placeholder={`${placeholder}..`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;

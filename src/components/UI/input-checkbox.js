const InputCheckbox = ({ section, option, optionIdx }) => {
  return (
    <div key={option.value} className="flex items-center">
      <input
        id={`filter-${section.id}-${optionIdx}`}
        name={`${section.id}[]`}
        defaultValue={option.value}
        type="checkbox"
        defaultChecked={option.checked}
        className="h-4 w-4 rounded border-gray-300 text-secondary focus:ring-primary"
      />
      <label
        htmlFor={`filter-${section.id}-${optionIdx}`}
        className="ml-3 text-2xl text-gray-600"
      >
        {option.label}
      </label>
    </div>
  );
};
export default InputCheckbox;

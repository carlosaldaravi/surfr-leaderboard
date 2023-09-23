import { filtersOption } from "../../../data/filters-option";

const FilterGenderOptions = ({ filtersState, onChangeGender }) => {
  const filter = filtersOption.find((filter) => filter.id === "gender");

  const handleOptionChange = (value) => {
    if (value === "custom") return;
    onChangeGender({
      type: "GENDER",
      value,
    });
  };

  return (
    <fieldset>
      <legend className="sr-only">{filter.name}</legend>
      <div className="space-y-5">
        {filter.options.map((option) => (
          <div key={option.value} className="relative flex items-start">
            <div className="flex h-6 items-center">
              <input
                id={option.value}
                aria-describedby={`${option.value}-description`}
                name={`option-${option.value}`}
                type="radio"
                checked={filtersState.gender.value === option.value}
                onChange={() => handleOptionChange(option.value)}
                className="h-4 w-4 border-gray-300 text-secondary focus:ring-primary"
              />
            </div>
            <label htmlFor={option.value} className="ml-3 text-2xl leading-6">
              <span className="font-medium text-gray-900">{option.label}</span>
              <p
                id={`${option.value}-description`}
                className="text-gray-500 text-lg"
              >
                {option.description}
              </p>
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};
export default FilterGenderOptions;

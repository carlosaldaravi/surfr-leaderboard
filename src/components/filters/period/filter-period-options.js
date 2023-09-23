import { filtersOption } from "../../../data/filters-option";
import Input from "../../UI/input";

const FilterPeriodOptions = ({ filtersState, onChangePeriod }) => {
  const filter = filtersOption.find((filter) => filter.id === "period");

  const handleOptionChange = (value) => {
    if (value === "custom") return;
    onChangePeriod({
      type: "PERIOD",
      value,
    });
  };

  const onChangeFromDate = (from) => {
    onChangePeriod({
      type: "PERIOD",
      value: "custom",
      from: from < filtersState.period.to ? from : filtersState.period.to,
      to: filtersState.period.to,
    });
  };

  const onChangeToDate = (to) => {
    onChangePeriod({
      type: "PERIOD",
      value: "custom",
      from: filtersState.period.from,
      to: to > filtersState.period.from ? to : filtersState.period.from,
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
                checked={filtersState.period.value === option.value}
                onChange={() => handleOptionChange(option.value)}
                className="h-4 w-4 border-gray-300 text-secondary focus:ring-primary"
              />
            </div>
            <label htmlFor={option.value} className="ml-3 text-2xl leading-6">
              <span className="font-medium text-gray-900">{option.label}</span>
              {option.value !== "custom" ? (
                <p
                  id={`${option.value}-description`}
                  className="text-gray-500 text-lg"
                >
                  {option.description}
                </p>
              ) : (
                <>
                  <div className="text-xl mt-2">From</div>
                  <Input
                    type="date"
                    placeholder="Month"
                    value={filtersState.period.from}
                    onChange={(value) => onChangeFromDate(value)}
                  />
                  <div className="text-xl">To</div>
                  <Input
                    type="date"
                    placeholder="Year"
                    value={filtersState.period.to}
                    onChange={(value) => onChangeToDate(value)}
                    pattern="[0-9]{4}-[0-9]{2}"
                  />
                </>
              )}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};
export default FilterPeriodOptions;

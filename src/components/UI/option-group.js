import { useState } from "react";
import Input from "./input";

const OptionGroup = ({ filter, onChangePeriod }) => {
  const [selectedOption, setSelectedOption] = useState("alltime");

  const handleOptionChange = (value) => {
    setSelectedOption(value);
    onChangePeriod(value);
  };

  const onChangeFromDate = (from) => {
    onChangePeriod({
      type: "PERIOD",
      value: "custom",
      from,
    });
  };

  const onChangeToDate = (to) => {
    onChangePeriod({
      type: "PERIOD",
      value: "custom",
      to,
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
                name="option"
                type="radio"
                defaultChecked={option.value === "alltime"}
                onChange={() => handleOptionChange(option.value)}
                className="h-4 w-4 border-gray-300 text-secondary focus:ring-primary"
              />
            </div>
            <div className="ml-3 text-2xl leading-6">
              <label
                htmlFor={option.value}
                className="font-medium text-gray-900"
              >
                {option.label}
              </label>
              {option.value !== "custom" ? (
                <p id={`${option.value}-description`} className="text-gray-500 text-lg">
                  {option.description}
                </p>
              ) : (
                selectedOption === "custom" && (
                  <>
                    <div className="text-xl mt-2">From</div>
                    <Input
                      type="date"
                      placeholder="Month"
                      // value={fromDateValue}
                      onChange={(value) => onChangeFromDate(value)}
                    />
                    <div className="text-xl">To</div>
                    <Input
                      type="date"
                      placeholder="Year"
                      // value={toDateValue}
                      onChange={(value) => onChangeToDate(value)}
                      pattern="[0-9]{4}-[0-9]{2}"
                    />
                  </>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
};
export default OptionGroup;

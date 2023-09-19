import { useState } from "react";
import Input from "./input";

const OptionGroup = ({ filter, onChangePeriod }) => {
  const [selectedOption, setSelectedOption] = useState("alltime");
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");

  const handleOptionChange = (value) => {
    setSelectedOption(value);
    onChangePeriod({
      type: "PERIOD",
      value,
    });
  };

  const onChangeFromDate = (from) => {
    setFromValue(from);
    onChangePeriod({
      type: "PERIOD",
      value: "custom",
      from,
      to: toValue,
    });
  };

  const onChangeToDate = (to) => {
    to < fromValue ? setToValue(fromValue) : setToValue(to);
    onChangePeriod({
      type: "PERIOD",
      value: "custom",
      from: fromValue,
      to: to,
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
                selectedOption === "custom" && (
                  <>
                    <div className="text-xl mt-2">From</div>
                    <Input
                      type="date"
                      placeholder="Month"
                      value={fromValue}
                      onChange={(value) => onChangeFromDate(value)}
                    />
                    <div className="text-xl">To</div>
                    <Input
                      type="date"
                      placeholder="Year"
                      value={toValue}
                      onChange={(value) => onChangeToDate(value)}
                      pattern="[0-9]{4}-[0-9]{2}"
                    />
                  </>
                )
              )}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};
export default OptionGroup;

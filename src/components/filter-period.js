import { filtersOption } from "../data/filters-option";
import OptionGroup from "./UI/option-group";
import Filter from "./filter";

const FilterPeriod = ({ onChangePeriod }) => {
  const periodFilter = filtersOption.find((filter) => filter.id === "period");

  return (
    <Filter name="Period">
      <OptionGroup
        filter={periodFilter}
        onChangePeriod={(period) => onChangePeriod(period)}
      />
    </Filter>
  );
};

export default FilterPeriod;

import FilterPeriodOptions from "./filter-period-options";
import FilterDisclosure from "../filter-disclosure";

const FilterPeriod = ({ filtersState, onChangePeriod }) => {
  return (
    <FilterDisclosure name="Period">
      <FilterPeriodOptions
        filtersState={filtersState}
        onChangePeriod={(period) => onChangePeriod(period)}
      />
    </FilterDisclosure>
  );
};

export default FilterPeriod;

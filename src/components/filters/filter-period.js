import FilterPeriodOptions from "./filter-period-options";
import Filter from "./filter";

const FilterPeriod = ({ filtersState, onChangePeriod }) => {
  return (
    <Filter name="Period">
      <FilterPeriodOptions
        filtersState={filtersState}
        onChangePeriod={(period) => onChangePeriod(period)}
      />
    </Filter>
  );
};

export default FilterPeriod;

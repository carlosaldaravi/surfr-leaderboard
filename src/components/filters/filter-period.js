import OptionGroup from "../UI/option-group";
import Filter from "./filter";

const FilterPeriod = ({ filtersState, onChangePeriod }) => {
  return (
    <Filter name="Period">
      <OptionGroup
        filtersState={filtersState}
        onChangePeriod={(period) => onChangePeriod(period)}
      />
    </Filter>
  );
};

export default FilterPeriod;

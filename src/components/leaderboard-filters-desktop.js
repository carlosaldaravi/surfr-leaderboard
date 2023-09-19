import Input from "./UI/input";
import Filter from "./filter";
import Checkboxs from "./UI/checkboxs";
import { filtersCheckbox } from "../data/filters-checkbox";
import FilterPeriod from "./filter-period";

const LeaderboardFiltersDesktop = ({
  countryValue,
  spotValue,
  onChangePeriod,
  onChangeCountryValue,
  onChangeSpotValue,
}) => {
  return (
    <form className="hidden lg:block">
      <h3 className="sr-only">Categories</h3>
      <Filter name="Location">
        <Input
          placeholder="Country"
          value={countryValue}
          onChange={(value) => onChangeCountryValue(value)}
        />
        <Input
          placeholder="Spot"
          value={spotValue}
          onChange={(value) => onChangeSpotValue(value)}
        />
      </Filter>
      <FilterPeriod onChangePeriod={(period) => onChangePeriod(period)} />
      {filtersCheckbox.map((section) => (
        <Filter key={section.id} name={section.name}>
          <Checkboxs section={section} />
        </Filter>
      ))}
    </form>
  );
};

export default LeaderboardFiltersDesktop;

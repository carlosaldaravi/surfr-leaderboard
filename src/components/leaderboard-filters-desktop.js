import Input from "./UI/input";
import Filter from "./filter";
import FilterPeriod from "./filter-period";

const LeaderboardFiltersDesktop = ({
  filtersState,
  onChangePeriod,
  onChangeCountryValue,
  onChangeSpotValue,
}) => {
  return (
    <form className="hidden lg:block">
      <h3 className="sr-only">Categories</h3>
      {/* <Filter name="Location">
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
      </Filter> */}
      <FilterPeriod filtersState={filtersState} onChangePeriod={(period) => onChangePeriod(period)} />
    </form>
  );
};

export default LeaderboardFiltersDesktop;

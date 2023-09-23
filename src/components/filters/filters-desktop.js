import Input from "../UI/input";
import Filter from "./filter";
import FilterGender from "./filter-gender";
import FilterPeriod from "./filter-period";

const FiltersDesktop = ({
  filtersState,
  onChangePeriod,
  onChangeGender,
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
      <FilterPeriod
        filtersState={filtersState}
        onChangePeriod={(period) => onChangePeriod(period)}
      />
      <FilterGender
        filtersState={filtersState}
        onChangeGender={(gender) => onChangeGender(gender)}
      />
    </form>
  );
};

export default FiltersDesktop;

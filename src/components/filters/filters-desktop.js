import FilterGender from "./filter-gender";
import FilterPeriod from "./filter-period";

const FiltersDesktop = ({
  filtersState,
  onChangePeriod,
  onChangeGender,
  onChangeLocation,
}) => {
  return (
    <form className="hidden lg:block">
      <h3 className="sr-only">Categories</h3>
      {/* <FilterLocation
        filtersState={filtersState}
        onChangeLocation={(location) => onChangeLocation(location)}
      /> */}
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

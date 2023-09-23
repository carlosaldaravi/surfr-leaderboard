import Filter from "./filter";
import FilterGenderOptions from "./filter-gender-options";

const FilterGender = ({ filtersState, onChangeGender }) => {
  return (
    <Filter name="Gender">
      <FilterGenderOptions
        filtersState={filtersState}
        onChangeGender={(gender) => onChangeGender(gender)}
      />
    </Filter>
  );
};

export default FilterGender;

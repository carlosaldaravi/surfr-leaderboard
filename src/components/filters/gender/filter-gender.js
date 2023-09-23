import FilterDisclosure from "../filter-disclosure";
import FilterGenderOptions from "./filter-gender-options";

const FilterGender = ({ filtersState, onChangeGender }) => {
  return (
    <FilterDisclosure name="Gender">
      <FilterGenderOptions
        filtersState={filtersState}
        onChangeGender={(gender) => onChangeGender(gender)}
      />
    </FilterDisclosure>
  );
};

export default FilterGender;

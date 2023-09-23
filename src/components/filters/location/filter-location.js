import Input from "../../UI/input";
import Filter from "./filter";

const FilterLocation = ({
  countryValue,
  spotValue,
  onSetCountryValue,
  onSetSpotValue,
}) => {
  return (
    <Filter name="Location">
      <Input
        placeholder="Country"
        value={countryValue}
        onChange={(value) => onSetCountryValue(value)}
      />
      <Input
        placeholder="Spot"
        value={spotValue}
        onChange={(value) => onSetSpotValue(value)}
      />
    </Filter>
  );
};

export default FilterLocation;

import Input from "./UI/input";
import Filter from "./filter";
import Checkboxs from "./UI/checkboxs";
import { filters } from "../data/filters";

const LeaderboardFiltersDesktop = ({
  countryValue,
  spotValue,
  fromDateValue,
  toDateValue,
  onChangeFromDate,
  onChangeToDate,
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
      <Filter name="Dates">
        <div className="text-xl">From</div>
        <Input
          type="date"
          placeholder="Month"
          value={fromDateValue}
          onChange={(value) => onChangeFromDate(value)}
        />
        <div className="text-xl">To</div>
        <Input
          type="date"
          placeholder="Year"
          value={toDateValue}
          onChange={(value) => onChangeToDate(value)}
          pattern="[0-9]{4}-[0-9]{2}"
        />
      </Filter>

      {filters.map((section) => (
        <Filter key={section.id} name={section.name}>
          <Checkboxs section={section} />
        </Filter>
      ))}
    </form>
  );
};

export default LeaderboardFiltersDesktop;

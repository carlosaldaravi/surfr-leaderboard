import { useEffect, useReducer, useState } from "react";
import { getTodayDate } from "../helpers/dates";
import { SURFR_ACCESS_TOKEN, SURFR_URL } from "../env/constants";
import Leaderboard from "./leaderboard";
import LeaderboardFiltersMobile from "./leaderboard-filters-mobile";
import LeaderboardFiltersDesktop from "./leaderboard-filters-desktop";
import LeaderboardSortOptions from "./leaderboard-sort-options";
import {
  initialState as leaderboardInitialState,
  leaderboardReducer,
} from "../reducers/leaderboardReducer";
import {
  initialState as filtersInitialState,
  filtersReducer,
} from "../reducers/filtersReducer";

const LeaderboardFilters = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [countryValue, setCountryValue] = useState("");
  const [spotValue, setSpotValue] = useState("");
  const [fromDateValue, setFromDateValue] = useState("");
  const [toDateValue, setToDateValue] = useState(getTodayDate());
  const [filtersState, dispatchFilters] = useReducer(
    filtersReducer,
    filtersInitialState
  );
  const [leaderboardState, dispatchLeaderboard] = useReducer(
    leaderboardReducer,
    leaderboardInitialState
  );

  useEffect(() => {}, [leaderboardState]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leaderboardState.board]);

  const fetchData = async () => {
    dispatchLeaderboard({
      type: "LOADING",
      loading: true,
    });
    try {
      const response = await fetch(
        SURFR_URL +
          leaderboardState.board +
          "/alltime/0?accesstoken=" +
          SURFR_ACCESS_TOKEN
      );
      const data = await response.json();
      dispatchLeaderboard({
        type: "LEADERBOARD",
        value: data,
        board: leaderboardState.board,
        lastBoard: leaderboardState.board,
      });
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  return (
    <div>
      <LeaderboardFiltersMobile
        mobileFiltersOpen={mobileFiltersOpen}
        onCloseMobileFilters={(value) => setMobileFiltersOpen(value)}
        onChangeFromDate={(value) => setFromDateValue(value)}
        onChangeToDate={(value) => setToDateValue(value)}
        fromDateValue={fromDateValue}
        toDateValue={toDateValue}
        countryValue={countryValue}
        spotValue={spotValue}
        onChangeCountryValue={(value) => setCountryValue(value)}
        onChangeSpotValue={(value) => setSpotValue(value)}
      />

      <main className="mx-auto min-w-[340px] max-w-4xl lg:max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
          <h2 className="font-bold tracking-tight text-text">Leaderboard</h2>
          <LeaderboardSortOptions
            sortOptionSelected={leaderboardState.board}
            onChangeBoard={(value) =>
              dispatchLeaderboard({
                type: "BOARD",
                board: value,
              })
            }
            onOpenMobileFilters={(value) => setMobileFiltersOpen(value)}
          />
        </div>

        <section className="pb-24 pt-6">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {/* Filters */}
            <LeaderboardFiltersDesktop
              onChangeFromDate={(value) => setFromDateValue(value)}
              onChangeToDate={(value) => setToDateValue(value)}
              fromDateValue={fromDateValue}
              toDateValue={toDateValue}
              countryValue={countryValue}
              spotValue={spotValue}
              onChangeCountryValue={(value) => setCountryValue(value)}
              onChangeSpotValue={(value) => setSpotValue(value)}
            />

            {/* Leaderboard grid */}
            <div className="lg:col-span-3">
              <Leaderboard leaderboard={leaderboardState} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LeaderboardFilters;

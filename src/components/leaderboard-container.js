import { useCallback, useEffect, useReducer, useState } from "react";
import { SURFR_ACCESS_TOKEN, SURFR_URL } from "../env/constants";
import Leaderboard from "./leaderboard/leaderboard";
import FilterBoardOptions from "./filters/board/filter-board-options";
import FiltersMobile from "./filters/mobile/filters-mobile";
import FiltersDesktop from "./filters/desktop/filters-desktop";
import {
  initialState as leaderboardInitialState,
  leaderboardReducer,
} from "../reducers/leaderboardReducer";
import {
  initialState as filtersInitialState,
  filtersReducer,
} from "../reducers/filtersReducer";
import { leaderboardData } from "../data/leaderboard";

const LeaderboardContainer = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [filtersState, dispatchFilters] = useReducer(
    filtersReducer,
    filtersInitialState
  );
  const [leaderboardState, dispatchLeaderboard] = useReducer(
    leaderboardReducer,
    leaderboardInitialState
  );

  const fetchData = useCallback(async () => {
    dispatchLeaderboard({
      type: "LOADING",
      loading: true,
    });
    try {
      let url =
        SURFR_URL +
        leaderboardState.board +
        "/" +
        filtersState.period.value +
        "/" +
        page +
        "?accesstoken=" +
        SURFR_ACCESS_TOKEN;
      if (filtersState.period.value === "custom") {
        url +=
          "&from=" + filtersState.period.from + "&to=" + filtersState.period.to;
      }
      if (filtersState.gender.value !== "both") {
        url += "&gender=" + filtersState.gender.value;
      }
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        dispatchLeaderboard({
          type: "LEADERBOARD",
          value: data,
          board: leaderboardState.board,
          lastBoard: leaderboardState.board,
        });
      }
      setLoading(false);
    } catch (error) {
      const data = leaderboardData[leaderboardState.board][page];
      console.log("data: ", data);
      dispatchLeaderboard({
        type: "LEADERBOARD",
        value: data,
        board: leaderboardState.board,
        lastBoard: leaderboardState.board,
      });
      // console.error("Error al obtener los datos:", error);
    }
  }, [leaderboardState.board, filtersState, page]);

  const onChangePeriodHandler = (period) => {
    setLoading(true);
    setPage(0);
    if (period === "custom") return;
    dispatchFilters({
      type: "PERIOD",
      period,
    });
  };

  const onChangeGenderHandler = (gender) => {
    setLoading(true);
    setPage(0);
    dispatchFilters({
      type: "GENDER",
      gender,
    });
  };
  const onChangeLocationHandler = (location) => {
    setLoading(true);
    setPage(0);
    dispatchFilters({
      type: "LOCATION",
      location,
    });
  };
  const setPageHangler = (newPage) => {
    if (leaderboardData[leaderboardState.board][page + newPage]) {
      setPage((prevPage) => prevPage + newPage);
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <FiltersMobile
        mobileFiltersOpen={mobileFiltersOpen}
        onCloseMobileFilters={(value) => setMobileFiltersOpen(value)}
        filtersState={filtersState}
        onChangePeriod={(period) => onChangePeriodHandler(period)}
        onChangeGender={(gender) => onChangeGenderHandler(gender)}
        onChangeLocation={(value) => onChangeLocationHandler(value)}
      />

      <main className="mx-auto min-w-[340px] max-w-4xl lg:max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
          <h2 className="font-bold tracking-tight text-text">Leaderboard</h2>
          <FilterBoardOptions
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
            <FiltersDesktop
              filtersState={filtersState}
              onChangePeriod={(period) => onChangePeriodHandler(period)}
              onChangeGender={(gender) => onChangeGenderHandler(gender)}
              onChangeLocation={(value) => onChangeLocationHandler(value)}
            />

            {/* Leaderboard grid */}
            <div className="lg:col-span-3">
              <Leaderboard
                leaderboard={leaderboardState}
                page={page}
                onChangePage={(newPage) => setPageHangler(newPage)}
                loading={loading}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LeaderboardContainer;

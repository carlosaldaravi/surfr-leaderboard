import { useEffect, useState } from "react";
import LeaderboardRider from "./leaderboard-rider";
import Pagination from "../UI/pagination";

const LeaderboardBody = ({ leaderboard, page, onChangePage, loading }) => {
  const [actualLeaderboard, setActualLeaderboard] = useState([]);

  useEffect(() => {
    if (leaderboard.lastLeaderboard[leaderboard.board].length > 0) {
      setActualLeaderboard(leaderboard.lastLeaderboard[leaderboard.board]);
    } else {
      setActualLeaderboard([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leaderboard.loading]);

  return !loading && actualLeaderboard.length > 0 ? (
    <>
      <ol className="bg-primary">
        {actualLeaderboard &&
          actualLeaderboard.map((rider, index) => (
            <LeaderboardRider
              key={rider.user.name}
              rider={rider}
              leaderboardSelected={leaderboard.board}
              position={index + 1}
            />
          ))}
      </ol>
      <Pagination
        page={page}
        onChangePage={(newPage) => onChangePage(newPage)}
      />
    </>
  ) : (
    <div className="bg-primary h-24 flex justify-center items-center text-xl">
      Loading....
    </div>
  );
};

export default LeaderboardBody;

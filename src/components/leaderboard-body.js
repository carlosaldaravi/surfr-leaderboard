import { useEffect, useState } from "react";
import LeaderboardRider from "./leaderboard-rider";

const LeaderboardBody = ({ leaderboard }) => {
  const [actualLeaderboard, setActualLeaderboard] = useState([]);

  useEffect(() => {
    if (leaderboard.lastLeaderboard[leaderboard.board].length > 0) {
      setActualLeaderboard(leaderboard.lastLeaderboard[leaderboard.board]);
    } else {
      setActualLeaderboard([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leaderboard.loading]);

  return actualLeaderboard.length > 0 ? (
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
  ) : (
    <div className="bg-primary h-24 flex justify-center items-center text-xl">
      Loading....
    </div>
  );
};

export default LeaderboardBody;

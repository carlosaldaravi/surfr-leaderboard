import { TrophyIcon } from "@heroicons/react/24/outline";
import { isPodium, trophyClassColor } from "../../helpers/leaderboard";
import { BOARD_TYPES } from "../../types/board";

const LeaderboardRider = ({ rider, leaderboardSelected, position }) => {
  return (
    <li
      className={`p-4 grid grid-cols-leaderboard border-b last:border-0 border-secondary text-2xl sm:text-3xl`}
    >
      <div className="">{position}</div>

      <div className="flex gap-4">
        <div className="font-extralight">{rider.user.name}</div>
        {isPodium(position) && (
          <span>
            <TrophyIcon className={`h-8 w-8 ${trophyClassColor(position)}`} />
          </span>
        )}
      </div>

      <div className="text-end font-light">
        {rider.value.toFixed(2)}{" "}
        {leaderboardSelected === BOARD_TYPES.airtime ? "s" : "m"}
      </div>
    </li>
  );
};

export default LeaderboardRider;

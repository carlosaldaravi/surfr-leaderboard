import LeaderboardHeaderImage from "./leaderboard-header-image";

const LeaderboardHeader = ({ leaderboardSelected }) => {
  return (
    <div className="relative h-36 flex justify-center items-center bg-secondary">
      <LeaderboardHeaderImage />
      <span className="absolute bottom-0 right-0 mr-2 uppercase tracking-widest font-black text-gray-300 text-2xl">
        {leaderboardSelected}
      </span>
    </div>
  );
};

export default LeaderboardHeader;

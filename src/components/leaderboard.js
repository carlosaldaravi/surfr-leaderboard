import LeaderboardBody from "./leaderboard-body";
import LeaderboardHeader from "./leaderboard-header";

const Leaderboard = ({ leaderboard, loading }) => {
  return (
    <div className="border rounded-xl min-w-[340px] max-w-4xl mx-auto overflow-hidden">
      <LeaderboardHeader leaderboardSelected={leaderboard.board} />
      <LeaderboardBody leaderboard={leaderboard} loading={loading} />
    </div>
  );
};

export default Leaderboard;

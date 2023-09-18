import surfrLogo from "../assets/imgs/surfr.png";

const LeaderboardHeaderImage = () => {
  return (
    <div>
      <img src={surfrLogo} alt="surfr logo" className="h-20 sm:h-24 mx-auto" />
      {/* <p className="uppercase text-center text-[1.6rem] sm:text-5xl font-bold text-text">
        leaderboard
      </p> */}
    </div>
  );
};
export default LeaderboardHeaderImage;

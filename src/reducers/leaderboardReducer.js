export const initialState = {
  value: [],
  board: "height",
  lastBoard: null,
  lastLeaderboard: {
    height: [],
    airtime: [],
    distance: [],
  },
  loading: true,
};
export const leaderboardReducer = (state, action) => {
  if (action.type === "LEADERBOARD") {
    return {
      ...state,
      value: action.value,
      lastLeaderboard: {
        ...state.lastLeaderboard,
        [action.board]: action.value,
      },
      loading: false,
    };
  }
  if (action.type === "LOADING") {
    return {
      ...state,
      loading: action.loading,
    };
  }
  if (action.type === "BOARD") {
    return {
      ...state,
      lastBoard: state.board,
      board: action.board,
    };
  }
  return {
    value: [],
    board: "",
    lastBoard: null,
    lastLeaderboard: {
      height: [],
      airtime: [],
      distance: [],
    },
    loading: false,
  };
};

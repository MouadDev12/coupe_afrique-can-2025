import { configureStore, createSlice } from '@reduxjs/toolkit';

// Teams Slice
const teamsSlice = createSlice({
  name: 'teams',
  initialState: {
    teams: [],
    selectedTeam: null,
    loading: false,
    error: null
  },
  reducers: {
    setTeams: (state, action) => {
      state.teams = action.payload;
    },
    setSelectedTeam: (state, action) => {
      state.selectedTeam = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

// Matches Slice
const matchesSlice = createSlice({
  name: 'matches',
  initialState: {
    matches: [],
    loading: false,
    error: null
  },
  reducers: {
    setMatches: (state, action) => {
      state.matches = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

// Favorites Slice
const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favoriteTeams: [],
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const teamId = action.payload;
      const index = state.favoriteTeams.indexOf(teamId);
      if (index > -1) {
        state.favoriteTeams.splice(index, 1);
      } else {
        state.favoriteTeams.push(teamId);
      }
    },
    clearFavorites: (state) => {
      state.favoriteTeams = [];
    }
  }
});

export const { setTeams, setSelectedTeam, setLoading: setTeamsLoading, setError: setTeamsError } = teamsSlice.actions;
export const { setMatches, setLoading: setMatchesLoading, setError: setMatchesError } = matchesSlice.actions;
export const { toggleFavorite, clearFavorites } = favoritesSlice.actions;

export const store = configureStore({
  reducer: {
    teams: teamsSlice.reducer,
    matches: matchesSlice.reducer,
    favorites: favoritesSlice.reducer,
  },
});
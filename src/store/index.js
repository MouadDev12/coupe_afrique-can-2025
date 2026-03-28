import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// API base URL
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

// Async thunks
export const fetchTeams = createAsyncThunk(
  'teams/fetchTeams',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/teams`);
      if (!response.ok) {
        throw new Error('Failed to fetch teams');
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchMatches = createAsyncThunk(
  'matches/fetchMatches',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/matches`);
      if (!response.ok) {
        throw new Error('Failed to fetch matches');
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchPlayers = createAsyncThunk(
  'players/fetchPlayers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/players`);
      if (!response.ok) {
        throw new Error('Failed to fetch players');
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeams.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTeams.fulfilled, (state, action) => {
        state.loading = false;
        state.teams = action.payload;
      })
      .addCase(fetchTeams.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMatches.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMatches.fulfilled, (state, action) => {
        state.loading = false;
        state.matches = action.payload;
      })
      .addCase(fetchMatches.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

// Players Slice
const playersSlice = createSlice({
  name: 'players',
  initialState: {
    players: [],
    loading: false,
    error: null
  },
  reducers: {
    setPlayers: (state, action) => {
      state.players = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlayers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPlayers.fulfilled, (state, action) => {
        state.loading = false;
        state.players = action.payload;
      })
      .addCase(fetchPlayers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
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
export const { setPlayers, setLoading: setPlayersLoading, setError: setPlayersError } = playersSlice.actions;
export const { toggleFavorite, clearFavorites } = favoritesSlice.actions;

export const store = configureStore({
  reducer: {
    teams: teamsSlice.reducer,
    matches: matchesSlice.reducer,
    players: playersSlice.reducer,
    favorites: favoritesSlice.reducer,
  },
});
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Load data
const teams = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'teams.json'), 'utf8'));
const matches = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'matches.json'), 'utf8'));
const players = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'players.json'), 'utf8'));

// API Routes
app.get('/api/teams', (req, res) => {
  res.json(teams);
});

app.get('/api/teams/:id', (req, res) => {
  const team = teams.find(t => t.id === parseInt(req.params.id));
  if (team) {
    res.json(team);
  } else {
    res.status(404).json({ message: 'Team not found' });
  }
});

app.get('/api/matches', (req, res) => {
  res.json(matches);
});

app.get('/api/matches/:id', (req, res) => {
  const match = matches.find(m => m.id === parseInt(req.params.id));
  if (match) {
    res.json(match);
  } else {
    res.status(404).json({ message: 'Match not found' });
  }
});

app.get('/api/players', (req, res) => {
  res.json(players);
});

app.get('/api/players/:id', (req, res) => {
  const player = players.find(p => p.id === parseInt(req.params.id));
  if (player) {
    res.json(player);
  } else {
    res.status(404).json({ message: 'Player not found' });
  }
});

// Get players by team
app.get('/api/teams/:id/players', (req, res) => {
  const teamPlayers = players.filter(p => p.team_id === parseInt(req.params.id));
  res.json(teamPlayers);
});

// Get matches for a team
app.get('/api/teams/:id/matches', (req, res) => {
  const teamMatches = matches.filter(m => m.teamA_id === parseInt(req.params.id) || m.teamB_id === parseInt(req.params.id));
  res.json(teamMatches);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
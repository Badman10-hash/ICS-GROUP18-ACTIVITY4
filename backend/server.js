const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// GET all showtimes
app.get('/api/showtimes', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM showtimes');
  res.json(rows);
});

// GET one showtime
app.get('/api/showtimes/:id', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM showtimes WHERE id = ?', [req.params.id]);
  res.json(rows[0]);
});

// POST new showtime
app.post('/api/showtimes', async (req, res) => {
  const { movie_title, genre, duration, rating, theater } = req.body;
  const [result] = await db.query(
    'INSERT INTO showtimes (movie_title, genre, duration, rating, theater) VALUES (?, ?, ?, ?, ?)',
    [movie_title, genre, duration, rating, theater]
  );
  res.status(201).json({ id: result.insertId });
});

// PUT update showtime
app.put('/api/showtimes/:id', async (req, res) => {
  const { movie_title, genre, duration, rating, theater } = req.body;
  await db.query(
    'UPDATE showtimes SET movie_title = ?, genre = ?, duration = ?, rating = ?, theater = ? WHERE id = ?',
    [movie_title, genre, duration, rating, theater, req.params.id]
  );
  res.json({ message: 'Showtime updated' });
});

// DELETE showtime
app.delete('/api/showtimes/:id', async (req, res) => {
  await db.query('DELETE FROM showtimes WHERE id = ?', [req.params.id]);
  res.json({ message: 'Showtime deleted' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

CREATE DATABASE IF NOT EXISTS cinema_db;
USE cinema_db;

CREATE TABLE IF NOT EXISTS showtimes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  movie_title VARCHAR(200) NOT NULL,
  genre VARCHAR(100),
  duration VARCHAR(20),
  rating VARCHAR(10),
  theater VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO showtimes (movie_title, genre, duration, rating, theater) VALUES
('Dune: Part Two', 'Sci-Fi', '2h 45m', 'PG-13', 'NLT'),
('The Marvels', 'Action', '2h 10m', 'PG-14', 'CHM CINEMA'),
('Wonka', 'Fantasy', '1h 55m', 'PG', 'GRADUATION SQUARE'),
('Napoleon', 'Historical', '2h 38m', 'R', 'G51'),
('The Hunger Games', 'Thriller', '2h 30m', 'PG-13', 'OUTSIDE ICT'),
('Aquaman 2', 'Adventure', '2h 20m', 'PG-13', 'CHICHI\'S'),
('Wish', 'Animation', '1h 40m', 'PG', 'CHALABESA'),
('Migration', 'Comedy', '1h 35m', 'PG', 'NLT'),
('The Creator', 'Sci-Fi', '2h 15m', 'PG-13', 'CHM CINEMA'),
('Killers of the Flower Moon', 'Drama', '3h 26m', 'R', 'G51');

const API_URL = 'http://localhost:3000/api/showtimes';

const tableBody = document.querySelector('#showtimes-table tbody');
const form = document.getElementById('add-form');
const input = document.getElementById('movie_title');

// Load all showtimes
async function loadShowtimes() {
  const res = await fetch(API_URL);
  const data = await res.json();
  tableBody.innerHTML = '';
  data.forEach(show => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${show.id}</td>
      <td contenteditable="true">${show.movie_title}</td>
      <td>
        <button onclick="updateShowtime(${show.id}, this)">Update</button>
        <button onclick="deleteShowtime(${show.id})">Delete</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

// Add new showtime
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = input.value.trim();
  if (!title) return;
  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ movie_title: title })
  });
  input.value = '';
  loadShowtimes();
});

// Update showtime
async function updateShowtime(id, btn) {
  const row = btn.closest('tr');
  const title = row.children[1].textContent.trim();
  await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ movie_title: title })
  });
  loadShowtimes();
}

// Delete showtime
async function deleteShowtime(id) {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  loadShowtimes();
}

loadShowtimes();

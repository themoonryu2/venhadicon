fetch('quotes.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('quote-list');
    data.forEach(q => {
      const li = document.createElement('li');
      li.textContent = `"${q.content}" — ${q.author}`;
      container.appendChild(li);
    });
  })
  .catch(err => console.error('Không load được danh ngôn:', err));

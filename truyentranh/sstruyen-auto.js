// Sử dụng CORS proxy miễn phí: allorigins.win
fetch("https://api.allorigins.win/get?url=" + encodeURIComponent("https://sstruyen.vn/"))
  .then(response => response.json())
  .then(data => {
    const html = data.contents;
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const books = doc.querySelectorAll('.story-list .story-item');

    const container = document.getElementById('truyen-list');
    container.innerHTML = '';

    books.forEach(book => {
      const title = book.querySelector('h3 a')?.innerText || "Không rõ";
      const link = book.querySelector('h3 a')?.href || "#";
      const img = book.querySelector('img')?.src || "";

      const item = document.createElement('div');
      item.innerHTML = `
        <a href="${link}" target="_blank">
          <img src="${img}" style="width:100px;height:auto;border-radius:5px;" />
          <p>${title}</p>
        </a>
      `;
      container.appendChild(item);
    });
  })
  .catch(err => {
    document.getElementById('truyen-list').innerHTML = "Không thể tải truyện.";
    console.error("Lỗi khi lấy dữ liệu:", err);
  });

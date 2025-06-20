fetch("https://corsproxy.io/?" + encodeURIComponent("https://sstruyen.vn/the-loai/tien-hiep/"))
  .then(res => res.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const stories = doc.querySelectorAll('.story-list .story-item');

    const container = document.getElementById('truyen-list');
    container.innerHTML = '';

    stories.forEach(story => {
      const title = story.querySelector('h3 a')?.innerText || "Không rõ tiêu đề";
      const link = "https://sstruyen.vn" + story.querySelector('h3 a')?.getAttribute('href');
      const img = story.querySelector('img')?.getAttribute('src') || '';

      const div = document.createElement('div');
      div.innerHTML = `
        <a href="${link}" target="_blank" style="display:inline-block;margin:10px;text-align:center;">
          <img src="${img}" style="width:120px;border-radius:8px;" />
          <br><span>${title}</span>
        </a>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => {
    console.error("Lỗi tải truyện:", err);
    document.getElementById('truyen-list').innerHTML = "❌ Không thể tải truyện. Kiểm tra lại proxy hoặc cấu trúc trang.";
  });

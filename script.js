fetch('https://api.thecatapi.com/v1/images/search')
  .then(response => response.json())
  .then(data => {
    if (data[0] && data[0].url) {
      const img = document.createElement('img');
      img.src = data[0].url;
      img.alt = 'Random Cat';
      img.style.maxWidth = '100%';
      img.style.height = 'auto';
      document.body.appendChild(img);
    } else {
      document.body.textContent = 'No cat image found.';
    }
  })
  .catch

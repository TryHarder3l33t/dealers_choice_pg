const html = require("html-template-tag");

module.exports = (post) => html`<!DOCTYPE html>
  <html>
    <head>
      <title>Chucks IG</title>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
      <div class="news-list">
        <header><img src="/logo.png" />Wizard News</header>
        <div class="news-item">
          <p>${post.title_chucksters} <small>(by ${post.id})</small></p>
          <p>${post.content_chucksters}</p>
          <a href="/">Back To The Scariest Stuff Ever</a>
        </div>
      </div>
    </body>
  </html>`;

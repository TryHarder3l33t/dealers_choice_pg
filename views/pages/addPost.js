const html = require("html-template-tag");

module.exports = () => html`<!DOCTYPE html>
  <html>
    <head>
      <title>Wizard News</title>
    </head>
    <body>
      <div class="news-list">
        <header>ChuckIG</header>
        <form method="post" action="/">
          <label for="name">Image URL</label>
          <input type="text" name="image" />

          <label for="title">Title</label>
          <input type="text" name="title" />

          <label for="content"> Write about Chuck</label>
          <textarea name="content"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </body>
  </html>`;

const html = require("html-template-tag");

module.exports = (chucks) => html`<!DOCTYPE html>
  <html>
    <head>
      <title>ChuckGram</title>
      <link rel="stylesheet" href="/style.css" />
      <!-- CSS only -->
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
    </head>

    <body>
      <div class="news-list container">
        <div class="row align-self-center ">
          <header>Chucks IG</header>
          <div class="col-8">
            ${chucks.map(
              (post) => html` <div class="card bg-dark text-white">
                <a href="${post.id}">
                  <img
                    src="${post.img_chucksters}"
                    class="card-img"
                    alt="..."
                  ></img>
                </a>
                <div class="card-img-overlay">
                  <a href="${post.id}">
                    <h5 class="card-title">Card title</h5>
                  </a>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">Last updated 3 mins ago</p>
                </div>
              </div>`
            )}
          </div>
        </div>
      </div>
    </body>
  </html>`;

// module.exports = (posts) =>
//   html`<html>
//     ${posts.map((post) => html`<li>${post.id}</li>`)}
//   </html>`;

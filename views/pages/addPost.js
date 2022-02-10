const html = require("html-template-tag");

module.exports = () => html`<!DOCTYPE html>
  <html>
    <head>
      <!-- Required meta tags -->
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <!-- Bootstrap CSS -->
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />

      <title>CHUCKIG</title>
    </head>
    <body>
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">CHUCKIG</a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/"
                    >Home</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/add">Add Chuck</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="news-list">
          
          <div class="row">
          <div class"col-5">
          <img
          src="https://i.kym-cdn.com/photos/images/facebook/000/008/622/chuck_norris_fact_by_N_Dee.jpg"
          class="img-fluid"
          alt="..."
        />
          </div>
          </div>
          <div class"col-5">
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



           
          </div>
        </div>
      </div>
    </body>
  </html>`;

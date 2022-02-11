const { default: htmlTemplateTag } = require("html-template-tag");
const html = require("html-template-tag");

module.exports = (chuckers) => html`
  <!DOCTYPE html>
  <html lang="en">
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
        <img
          src="https://www.adweek.com/wp-content/uploads/2018/08/chuck-norris-truck-hed-page-2018.jpg"
          class="img-fluid"
          alt="..."
        />
        <div class="row mb-2" >

        
            ${chuckers.map(
              (chuck) => html`<div class="col-md-4">
                <div
                  class="card flex-md-row mb-4 box-shadow h-md-250"
                   style="min-height:450px;""
                >
                  <div class="row">
                    <div
                      col-5
                      class="card-body d-flex flex-column align-items-start"
                    >
                      <strong class="d-inline-block mb-2 text-success"
                        >Breaking News</strong
                      >
                      <h3 class="mb-0 text-dark">${chuck.title_chucksters}</h3>
                      <div class="mb-1 text-muted">
                        ${chuck.title_chucksters} strikes again...
                      </div>

                      <a href="${chuck.id}">Continue reading</a>
                    </div>
                    <img
                      col-5
                      src="${chuck.img_chucksters}"
                      class="img-fluid"
                      alt="Card image cap"
                      max-width="100%"
                      height="250vw"
                    />
                  </div>
                </div>
              </div>`
            )}
        


      </div>


<!-----------------------------------------END of FORM----------------------------------->



    </div>
    

        
        <!-- Option 1: Bootstrap Bundle with Popper -->
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossorigin="anonymous"
        ></script>

        <!-- Option 2: Separate Popper and Bootstrap JS -->
        <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    -->
    </div>
    </body>
  </html>`;
//class="card-img-right flex-auto d-none d-md-block"

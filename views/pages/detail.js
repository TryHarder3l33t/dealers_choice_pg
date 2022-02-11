// const html = require("html-template-tag");

// module.exports = (post) => html`<!DOCTYPE html>
//   <html>
//     <head>
//       <title>Chucks IG</title>
//       <link rel="stylesheet" href="/style.css" />
//     </head>
//     <body>
//       <div class="news-list">
//         <header><img src="/logo.png" />Wizard News</header>
//         <div class="news-item">
//           <p>${post.title_chucksters} <small>(by ${post.id})</small></p>
//           <p>${post.content_chucksters}</p>
//           <a href="/">Back To The Scariest Stuff Ever</a>
//         </div>
//       </div>
//     </body>
//   </html>`;

const { default: htmlTemplateTag } = require("html-template-tag");
const html = require("html-template-tag");

module.exports = (chuck) => html`
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


      <style>
      body {
          margin: 20px;
          text-align: center;
      }
      h1 {
          color: green;
      }
      img {
          float: left; 
          margin: 5px;
      }
      p {
          text-align: justify;
          
  </style>


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
        
        <div class="row mb-2 " >
        <div class="col-md-10">
                <div
                  class="card flex-md-row mb-4 box-shadow h-md-250"
                   
                >
                  <div >
                    <div
                      
                      class="card-body d-flex flex-column align-items-start"
                    >
                      <strong class="d-inline-block mb-2 text-success"
                        >Breaking News</strong
                      >
                    <div class="row">
                    <div class = "col-5">
                    <img
                      
                      src="${chuck.img_chucksters}"
                      class="img-fluid"
                      alt="Card image cap"
                      style="max-width: 100%"
                      
                    />
                    </div>
                    <div class = "col-md-7 col-sm-11">
                    <h3 class="mb-0 text-dark">${chuck.title_chucksters}</h3>
                      <div class="mb-1 text-muted"><p>${chuck.title_chucksters} strikes again!!! ${chuck.content_chucksters}</p>
                        
                      </div>
                    </div>
                    </div>
                      <a href="/">Back To The Scariest Stuff Ever</a>
                    </div>
                    
                  </div>
                </div>
              </div>
      </div>
    </div>
        

        <!-- Optional JavaScript; choose one of the two! -->

        <!-- Option 1: Bootstrap Bundle with Popper -->
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossorigin="anonymous"
        ></script>

        
    </div>
    </body>
  </html>`;

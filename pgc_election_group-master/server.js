const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/*
 * The 'express.static' middleware provides some services Express can use to
 * serve files from a directory - in this case, the 'public' subdirectory of
 * this project.
 *
 * The 'app.use' function attaches middleware to our Express application, so
 * that when the application is running, it can serve static files. In this
 * case, we mount it over the entire app: any web request that GETs a path that
 * exists in the 'public' directory will be handled by the middleware. The
 * middleware also serves the 'index.html' file in a directory (if it exists)
 * whenever a client requests the directory itself.
 *
 * The 'public' directory for this project, in turn, contains all the HTML,
 * Javascript, and CSS files needed to run a simple chat client connected to
 * this server. Accessing this server's root URL will serve 'public/index.html',
 * which contains our chat client. This gives users an easy way to connect to
 * the server and interact with other users.
 *
 * See also:
 *  - Express: Serving static files in Express
 *    https://expressjs.com/en/starter/static-files.html
 *  - Express: express.static()
 *    https://expressjs.com/en/4x/api.html#express.static
 *  - Express: Using middleware
 *    https://expressjs.com/en/guide/using-middleware.html
 *  - Express: app.use()
 *    https://expressjs.com/en/4x/api.html#app.use
 */
app.use(express.static('public'));

// this is a single route, in the simplest possible format
// the simplest format is not necessarily the best one.
// this is, right now, an introduction to Callback Hell
// but it is okay for a first-level example



app.get('/s1', (req, res) => {
  const baseURL = 'https://joshwmay.github.io/pgc_election_group/public/json/places0.json';
  fetch(baseURL)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      res.send({ data: data });
        })
      .catch((err) => {
      console.log(err);
      res.redirect('/error');
        })

});

app.get('/s2', (req, res) => {
  const baseURL = 'https://joshwmay.github.io/pgc_election_group/public/json/places0_.json';
  fetch(baseURL)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      res.send({ data: data });
        })
      .catch((err) => {
      console.log(err);
      res.redirect('/error');
        })

});

app.get('/s3', (req, res) => {
  const baseURL = 'https://joshwmay.github.io/pgc_election_group/public/json/places1.json';
  fetch(baseURL)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      res.send({ data: data });
        })
      .catch((err) => {
      console.log(err);
      res.redirect('/error');
        })

});

app.get('/s4', (req, res) => {
  const baseURL = 'https://joshwmay.github.io/pgc_election_group/public/json/places1_.json';
  fetch(baseURL)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      res.send({ data: data });
        })
      .catch((err) => {
      console.log(err);
      res.redirect('/error');
        })

});

app.get('/s5', (req, res) => {
  const baseURL = 'https://joshwmay.github.io/pgc_election_group/public/json/places2.json';
  fetch(baseURL)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      res.send({ data: data });
        })
      .catch((err) => {
      console.log(err);
      res.redirect('/error');
        })

});

app.get('/s6', (req, res) => {
  const baseURL = 'https://joshwmay.github.io/pgc_election_group/public/json/places2_.json';
  fetch(baseURL)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      res.send({ data: data });
        })
      .catch((err) => {
      console.log(err);
      res.redirect('/error');
        })

});

app.get('/s7', (req, res) => {
  const baseURL = 'https://joshwmay.github.io/pgc_election_group/public/json/places3.json';
  fetch(baseURL)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      res.send({ data: data });
        })
      .catch((err) => {
      console.log(err);
      res.redirect('/error');
        })

});

app.get('/s8', (req, res) => {
  const baseURL = 'https://joshwmay.github.io/pgc_election_group/public/json/places3_.json';
  fetch(baseURL)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      res.send({ data: data });
        })
      .catch((err) => {
      console.log(err);
      res.redirect('/error');
        })
});

app.get('/s9', (req, res) => {
  const baseURL = 'https://joshwmay.github.io/pgc_election_group/public/json/places4.json';
  fetch(baseURL)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      res.send({ data: data });
        })
      .catch((err) => {
      console.log(err);
      res.redirect('/error');
        })

});

app.get('/sa', (req, res) => {
  const baseURL = 'https://joshwmay.github.io/pgc_election_group/public/json/places4_.json';
  fetch(baseURL)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      res.send({ data: data });
        })
      .catch((err) => {
      console.log(err);
      res.redirect('/error');
        })

});

app.get('/ball', (req, res) => {
  const baseURL = 'https://joshwmay.github.io/pgc_election_group/public/json/gen_ball.json';
  fetch(baseURL)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      res.send({ data: data });
        })
      .catch((err) => {
      console.log(err);
      res.redirect('/error');
        })

});
//cd documents/github/inst377_election_group

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

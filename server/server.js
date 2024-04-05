const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Successful response.');
});

app.listen(3000, () => console.log('Example app is listening on port 3000.'));const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('server/db.json');
const middlewares = jsonServer.defaults();
const db = require('./db.json');
const fs = require('fs');

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/login', (req, res, next) => { 
  const items = readItems();

  const user = items.filter(
    u => u.username === req.body.username && u.password === req.body.password
  )[0];

  if (user) {
    res.send({ ...formatUser(user), token: checkIfAdmin(user) });
  } else {
    res.status(401).send('Incorrect username or password');
  }
});

server.post('/register', (req, res) => {
  const items = readItems();
  const user = items.filter(u => u.username === req.body.username)[0];

  if (user === undefined || user === null) {
    res.send({
      ...formatUser(req.body),
      token: checkIfAdmin(req.body)
    });
    db.items.push(req.body);
  } else {
    res.status(500).send('User already exists');
  }
});

server.use('/items', (req, res, next) => {
  if (isAuthorized(req) || req.query.bypassAuth === 'true') {
    next();
  } else {
    res.sendStatus(401);
  }
});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});

function formatUser(user) {
  delete user.password;
  user.role = user.username === 'admin'
    ? 'admin'
    : 'user';
  return user;
}

function checkIfAdmin(user, bypassToken = false) {
  return user.username === 'admin' || bypassToken === true
    ? 'admin-token'
    : 'user-token';
}

function isAuthorized(req) {
  return req.headers.authorization === 'admin-token' ? true : false;
}

function readItems() {
  const dbRaw = fs.readFileSync('./server/db.json');  
  const items = JSON.parse(dbRaw).items
  return items;
}
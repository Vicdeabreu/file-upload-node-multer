const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

routes.get("/", multer().single('file'), (req, res) => {
  return res.json({ hello: 'World' });
});

module.exports = routes;
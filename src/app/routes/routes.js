var path = require("path");

module.exports = (app) => {
  app.get('/', (req, resp) => {
    resp.send({ index: 13 });
  });

  app.get('/neko', (req, resp) => {
    resp.send({ nekos: 1 });
  });

  app.get('/chatsan', function (req, res) {
    res.sendFile(path.join(__dirname + '../../page/' +  'index.html'));
  });
};

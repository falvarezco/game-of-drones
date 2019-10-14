const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const indexRoutes = require('./routes/index');

const app = express();
//  Serve client fields from react-app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use('/', indexRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`App listening on ${port}`);

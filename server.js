(function() {

  'use strict';

  const express = require('express');
  const path = require('path');
  const app = express();

  app.use(express.static(path.join(__dirname, 'public')));

  let port = 8000;

  if (typeof process.env.PORT !== 'undefined') {
    port = parseInt(process.env.PORT, 10);
  }

  app.listen(port);

  console.log('web-site-template on http://0.0.0.0:%d', port);

}());

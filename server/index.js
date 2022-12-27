
const liveServer = require("live-server");

const params = {
  host: 'localhost',
  port: '9150',
  open: 'false',
  root: './client'
};

liveServer.start(params);
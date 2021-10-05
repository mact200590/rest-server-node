const express = require("express");
var cors = require("cors");

const port = process.env.PORT;

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.userPath = "/api/user";
    //Midelwares
    this.middleware();
    this.routes();
  }

  //middleware
  middleware() {
    this.app.use(cors());
    this.app.use(express.json())
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.userPath, require("../routes/user.routes"));
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log(`Example app listening at http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;

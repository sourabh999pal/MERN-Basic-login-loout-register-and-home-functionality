const express = require('express');
require('./db/config');
const User = require('./db/users');
var cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

//register api is here 

app.post("/register", async (req, resp) => {
      let user = new User(req.body);
      let result = await user.save();
      resp.send(result)

});

//login api is here
app.post("/Login", async (req, resp) => {


      if (req.body.email && req.body.password) {
            let user = await User.findOne(req.body).select("-password");
            if (user) {
                  resp.send(user)
            } else {
                  resp.send({ result: 'No user found here' })
            }
      } else {
            resp.send({ result: 'either email or password is missing' })
      }


})



app.listen(5000)
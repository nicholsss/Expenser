const bcrypt = require("bcrypt");
const usersRouter = require("express").Router();
const User = require("../models/user");


usersRouter.post("/", async(request, response, next) => {
    try {
        const body = request.body
        /*
        if (body.password === undefined || body.username === undefined ||
            body.password.length < 3 || body.username.length < 3) {
         return response.sendStatus(400);
       }
*/
       const saltRounds = 10

       const passwordHash = await bcrypt.hash(body.password, saltRounds);

       const user = new User({
           username:body.username,
           passwordHash
       })
       const savedUser = await user.save()
       response.json(savedUser)

    } catch (error) {
       next(error)
 
    }
})

module.exports = usersRouter


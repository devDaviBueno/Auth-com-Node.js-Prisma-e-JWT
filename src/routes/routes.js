import { Router } from "express";
const routes = new Router()

import users from "../app/controllers/users.js";
import auth from "../app/middlewares/auth.js"




routes.post("/auth/register", users.register)
routes.post("/auth/login", users.login)

routes.use(auth)




export default routes
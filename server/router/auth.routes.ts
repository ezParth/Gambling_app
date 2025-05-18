import express from 'express'
import { isAuthenticated } from '../config/isAuthenticated'
import { login, signin } from '../controller/user.controller';
const AuthRouter = express();

AuthRouter.post('/auth', isAuthenticated)
AuthRouter.post('/login', login);
AuthRouter.post('/signin', signin);

export default AuthRouter
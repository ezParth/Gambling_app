import express from 'express'
import { connectDB } from './config/Database'
import AuthRouter from './router/auth.routes';
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3000;
app.use(cors({ origin: "*" }))
connectDB()

app.use('/api/auth', AuthRouter)

app.listen(PORT, () => {
    console.log("Server bounded successfully!")
})

import express from 'express'
import { connectDB } from './config/Database'

const app = express()
const PORT = process.env.PORT || 3000;

connectDB()

app.listen(PORT, () => {
    console.log("Server bounded successfully!")
})

import express from 'express'
import { connectDB } from './config/Database'
import AuthRouter from './router/auth.routes';
import cors from 'cors'
import QuestionRouter from './router/questions.routes';
import RankingsRouter from './router/ranking.routes';

const app = express()
const PORT = process.env.PORT || 3000;
app.use(cors({ origin: "*" }));
connectDB();

app.use('/api/auth', AuthRouter);
app.use('/api/questions', QuestionRouter);
app.use('/api/ranking', RankingsRouter); // http://localhost:3000/api/ranking/get-batsman

app.listen(PORT, () => {
    console.log("Server bounded successfully!")
})

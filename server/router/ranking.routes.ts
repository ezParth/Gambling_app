import { Router } from "express";
import { generateBatsmanRanking } from '../controller/ranking.controller';

const RankingsRouter = Router();

RankingsRouter.get('/get-batsman', generateBatsmanRanking)

export default RankingsRouter

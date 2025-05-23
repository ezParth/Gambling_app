import { Router } from "express";
import { updatePoints, getPoints, getTotalMoney } from "../controller/Points.controller";

const PointRouter = Router();

PointRouter.get("/update-points", updatePoints);
PointRouter.get("/get-points", getPoints);
PointRouter.get("/get-moeny", getTotalMoney);

export default PointRouter;

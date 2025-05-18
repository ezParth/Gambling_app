import jwt from 'jsonwebtoken';
import { NullResponse } from './Response';

export const isAuthenticated = async (req: any, res: any, next: any) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return new NullResponse(401, 'Please Login', false).SendResponse(res);
        }

        const token = authHeader.split(" ")[1];
        const SECRET: string = process.env.JWT_SECRET || "nothing";

        const decoded = jwt.verify(token, SECRET) as jwt.JwtPayload;

        req.id = decoded?.id;
        req.username = decoded?.username;

        next();
    } catch (error) {
        return new NullResponse(403, 'Invalid or expired token', false).SendResponse(res);
    }
};

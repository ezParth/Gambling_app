// Response.ts
class NullResponse {
    statusCode: number;
    message: string;
    success: boolean;

    constructor(statusCode: number, message: string, success: boolean) {
        this.statusCode = statusCode;
        this.message = message;
        this.success = success;
    }

    SendResponse(res: any) {
        return res.status(this.statusCode).json({
            message: this.message,
            success: this.success,
        });
    }
}

class ValueResponse {
    statusCode: number;
    message: string;
    success: boolean;
    data: { [key: string]: any };

    constructor(statusCode: number, message: string, key: string, value: any, success: boolean) {
        this.statusCode = statusCode;
        this.message = message;
        this.success = success;
        this.data = { [key]: value };
    }

    SendResponse(res: any) {
        return res.status(this.statusCode).json({
            message: this.message,
            success: this.success,
            ...this.data,
        });
    }
}

class CustomError {
    statusCode: number;
    message: string;
    success: boolean;

    constructor(statusCode: number, message: string) {
        this.statusCode = statusCode;
        this.message = message;
        this.success = false;
    }

    SendResponse(res: any) {
        return res.status(this.statusCode).json({
            message: this.message,
            success: this.success,
        })
    }
}

export { NullResponse, ValueResponse, CustomError };

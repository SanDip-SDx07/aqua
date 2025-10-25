"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globalRouteHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
};
exports.default = globalRouteHandler;

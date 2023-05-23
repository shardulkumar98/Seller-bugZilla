"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressLogger = exports.logger = void 0;
const pino_1 = __importDefault(require("pino"));
const express_pino_logger_1 = __importDefault(require("express-pino-logger"));
exports.logger = (0, pino_1.default)({
    level: process.env.LOG_LEVEL || 'info',
});
exports.expressLogger = (0, express_pino_logger_1.default)({
    logger: exports.logger,
});

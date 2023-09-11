import winston from 'winston'

export const logger = winston.createLogger({
    level: 'info',
    handleExceptions: true,
    handleRejections: true,
    format: winston.format.json(),
    transports: [
        new winston.transports.Console({}),
        new winston.transports.File({
            level: "error",
            handleExceptions: true,
            filename: "exception.log"
        })
    ]
})
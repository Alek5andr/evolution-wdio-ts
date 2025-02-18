import { ILogObject, Logger } from "tslog";
import { writeFileSync }  from "fs";

function logDebugToFile(logObject: ILogObject) {
    logToTransport('./logs/debug.log', logObject);
}

function logInfoToFile(logObject: ILogObject) {
    logToTransport('./logs/info.log', logObject);
}

function logOthersToFile(logObject: ILogObject) {
    logToTransport('./logs/others.log', logObject);
}

function logToTransport(fileName: string, logObject: ILogObject) {
    const loggingString = JSON.stringify(logObject.date) + ':' +
        JSON.stringify(logObject.logLevel) + ':' +
        JSON.stringify(logObject.fileName) + ':' +
        JSON.stringify(logObject.lineNumber) + ':' +
        JSON.stringify(logObject.columnNumber) + ':' +
        JSON.stringify(logObject.argumentsArray) + '\n';

    writeFileSync(fileName, loggingString, { encoding: 'utf8', flag: 'a' }
    );
}

const logger: Logger = new Logger();
logger.attachTransport(
  {
    silly: logOthersToFile,
    debug: logDebugToFile,
    trace: logOthersToFile,
    info: logInfoToFile,
    warn: logOthersToFile,
    error: logOthersToFile,
    fatal: logOthersToFile,
  },
  'debug'
);

export default logger;

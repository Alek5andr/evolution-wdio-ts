import logger from "./logger";

class Helper {
    generateRandomIntegerFrom0ToExcludingN(n: number): number {
        const randomInteger = Math.floor(Math.random() * n);
        logger.info('Generated random Integer is: ' + randomInteger);
        return randomInteger;
    }
}

export default new Helper();

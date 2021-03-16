import logger from "../../services/logger";

class Keyboard {
    hitEnter() {
        logger.info('Pressing "Enter" key');
        browser.keys('\uE007');
    }
}
export default new Keyboard();
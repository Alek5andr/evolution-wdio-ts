import logger from "../../services/logger";

class Keyboard {
    async hitEnter(): Promise<void> {
        logger.info('Pressing "Enter" key');
        await browser.keys('\uE007');
    }
}
export default new Keyboard();

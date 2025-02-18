import logger from "../services/logger";
import keyboard from "./elements/keyboard";
import Page from "./page";

class Search extends Page {
    get wordOrPhraseElement(): Promise<WebdriverIO.Element> { return $('#ptxt') }

    async setValueToWordOrPhraseInputField(value: string) {
        await (await this.wordOrPhraseElement).setValue(value);
    }

    async searchByWordOrPhrase(value: string) {
        logger.info(`Setting "${value}" to field "Ought word or phrase"`);
        await this.setValueToWordOrPhraseInputField(value);
        keyboard.hitEnter();
    }
}

export default new Search();

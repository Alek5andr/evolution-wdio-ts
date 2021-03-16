import logger from "../services/logger";
import keyboard from "./elements/keyboard";
import table from "./elements/table";
import Page from "./page";

class Search extends Page {
    private wordOrPhraseElementSelector: string = '#ptxt';
    private searchButtonElementSelector: string = '#sbtn';
    private searchTableDataElementSelector: string = '.td6';

    get wordOrPhraseElement() {
        return $(this.wordOrPhraseElementSelector);
    }

    clickSearchButton(): boolean {
        return super.clickElement($(this.searchButtonElementSelector));
    }

    // Insidious 'td' tag
    setValueToInputFieldByLabel(value: string, label: string) {
        super.setValueToInputFieldByParentElementLabel(table.tableDataElements, value, label);
    }

    setValueToWordOrPhraseInputField(value: string) {
        this.wordOrPhraseElement.setValue(value);
    }

    searchByWordOrPhrase(value: string) {
        logger.info(`Setting "${value}" to field "Ought word or phrase"`);
        this.setValueToWordOrPhraseInputField(value);
        keyboard.hitEnter();
    }
}

export default new Search();
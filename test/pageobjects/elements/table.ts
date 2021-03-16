import logger from "../../services/logger";
import Page from "../page";

class Table extends Page {
    private tableElementSelector: string = 'table>tbody';
    private tableRowElementSelector: string = 'tr';
    private tableDataElementSelector: string = 'td';

    get tableElement() {
        return $(this.tableElementSelector);
    }

    get tableRowElements() {
        return this.tableElement.$$(this.tableRowElementSelector);
    }

    get tableDataElements() {
        return this.tableElement.$(this.tableRowElementSelector).$$(this.tableDataElementSelector);
    }

    getAmountOfTableRows(): number {
        const amountOfTableRows: number = this.tableRowElements.length;
        logger.debug(' Amount of table rows is: ' + amountOfTableRows);
        return amountOfTableRows;
    }
}

export default new Table();
import Page from "../page";

class Table extends Page {
    get tableElement(): Promise<WebdriverIO.Element> {
        return $('table>tbody');
    }
}

export default new Table();

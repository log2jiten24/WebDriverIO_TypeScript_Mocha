class WebTable {

    private get tableDetails() { return $("//table[@name = 'BookTable']") }

    async getRowCount() {

        return await $$("//table[@name = 'BookTable']/tbody/tr").length;
    }

    async getTableHeader() {

        return await $$("//table[@name = 'BookTable']/tbody/tr/th").length;
    }

    async getCellCount() {

        return await $$("//table[@name = 'BookTable']/tbody/tr/td").length;

    }

    async getCellValue(row: number, column: number) {

        var cellValue = await $(`//table[@name = 'BookTable']/tbody/tr['${row}']/td['${column}']`);
        return cellValue.getText();
    }

    async getTableValues(columnValue: string) {

        const tableValues = await $$("//table[@name = 'BookTable']/tbody/tr/td");

        for (let i = 0; i < await tableValues.length; i++) {

            const link_text_All = await tableValues[i].getText();
            console.log('All the WebTable Values :', link_text_All);

            if(link_text_All === columnValue ){
                console.log('Elements matched');
                break;
                
            }

        }

    }

    async tableScrollView() {

        await this.tableDetails.scrollIntoView();

    }


}

export default new WebTable();
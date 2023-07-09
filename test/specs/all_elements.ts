describe('Find Elements demo', async () => {

    // beforeEach('Browser Opening', async () => {

    //     await browser.url("https://www.google.com/");
    //     await browser.maximizeWindow();
    // });

    it.skip('First Test Case to find all Hyperlinks ', async () => {

        const all_elements = $$('//a');

        //iterate using the for loop 
        // for (let i = 0; i < await all_elements.length; i++) {

        //     const link_text_All = await (await all_elements[i]).getText();
        //     if (link_text_All !== "") {
        //         console.log("Link Text Present : ", link_text_All);
        //     }

        // }lll'

        //doing the same thing using for each loop 
        for (const iterator of await all_elements) {

            const link_text_all = iterator.getText();
            if (await link_text_all !== "") {
                console.log('Link Text Present :', link_text_all);

            }

        }

    });

    it.only('WebTable Automation ', async () => {

        await browser.url("http://the-internet.herokuapp.com/tables");
        await browser.maximizeWindow();

        const table_details = $$('#table1 > tbody > tr >td');
        const table_rows = await $$('#table1 tr');
        const table_cols = await table_rows[1].$$('td');
        console.log('Second row details :' , await table_cols[2].getText());
        

        // for (const iterator of await table_details) {

        //     const all_table_elements = iterator.getText();

        //     if (await all_table_elements !== "") {
        //         console.log('All table element details ', all_table_elements);

        //     }

       // }




    });

});
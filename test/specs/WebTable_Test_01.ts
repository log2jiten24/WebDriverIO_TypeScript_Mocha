import WebTableUtil from "../pageobjects/webtable_objects.js" ;


describe('feature:WebTableHandling ', async () => {

    beforeEach("Open App", async () => {

        await browser.url("https://testautomationpractice.blogspot.com/");
        await browser.maximizeWindow();
    });

    it('WebTable Testing -Test all WebTable Methods : ' , async () => {

        browser.pause(10000);
        WebTableUtil.tableScrollView();
        //get the Table Row Count 
        console.log('WebTable Row Values    :',await WebTableUtil.getRowCount());
        //get the WebTable Header
        console.log('WebTable Header Values :',await WebTableUtil.getTableHeader());
        //get the Cell Count of the WebTable 
        console.log('WebTable Cell Count    :',await WebTableUtil.getCellCount());
        //get the particular row and column value 
        console.log('WebTable Cell Value    :',await WebTableUtil.getCellValue(3,4));
        
        //get the Table Values for all the row and column values 
        console.log(await WebTableUtil.getTableValues("Javascript"));
       
    })


});
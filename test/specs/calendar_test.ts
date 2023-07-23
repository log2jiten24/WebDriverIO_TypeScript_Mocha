import CalendarPage from "..//pageobjects//calendar_page.js";

describe('Calendar Feature testing', () => {

    beforeEach('Open the Browser', async () => {

        await browser.url("https://www.globalsqa.com/demo-site/datepicker/");
        await browser.maximizeWindow();
    })

    it('should handle simple data picker', async () => {

        await CalendarPage.clickonSimpleDatePicker();
        //switch to browser iframe to perform the date operation 
        await browser.switchToFrame(await CalendarPage.iframeSimpleDate);
        //set the date 
        CalendarPage.datePickerInput.setValue("12/07/2023");
        await browser.pause(2000);
        //to come out of the child frame to parent frame 
        await browser.switchToParentFrame();

    });

    it('should handle dropdown date picker', async () => {

        await CalendarPage.clickOnDropdownPicker();
        await browser.switchToFrame(await CalendarPage.iframeDropdownDate);
        await CalendarPage.datePickerInput.click();

        const day = 12, month = "Jul", year = 2023;

        await CalendarPage.selectDropdownDate(day, month, year);
        await browser.pause(10000);
        //to come out of the child frame to parent frame 
        await browser.switchToParentFrame();

    });

    it('should handle icon picker date', async () => {

        await CalendarPage.clickOnIconTriggerDatePickerTab();

        const day = 20, month = "Dec", year = 2021;
        await browser.switchToFrame(await CalendarPage.iframeTriggerDate);
        //it will go previous year and then select the date - it compares the actual and expected date 
        await CalendarPage.selectDateFromIconTrigger(day, month, year);
        await browser.switchToParentFrame();
    });


});
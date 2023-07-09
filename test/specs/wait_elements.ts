import WaitPage from "../pageobjects/wait_page.js";

describe('Wait Element Strategy Feature testing', async () => {


    beforeEach('Browser Openening test case', async () => {

        await browser.url('https://the-internet.herokuapp.com/dynamic_loading/1');
        await browser.maximizeWindow();
    })

    it('Wait Element Testing', async () => {

        //click on Start button 
        await WaitPage.clickStartButton();

        //wait for the element to be displayed- syntax is same for waitForClickable(), waitForEnabled()
        //waitForDisplayed() and the waitForEnabled() methods. 
        // await WaitPage.helloWorldHeader.waitForDisplayed({timeout:10000 , timeoutMsg:"Element failed to appear"});

        //this can be done alternately waitUntil methods to wait unitl the element appears 
        browser.waitUntil(async () => await WaitPage.helloWorldHeader.getText() === "Hello World!"
            , { timeout: 10000, timeoutMsg: "Wait Element failed to appear" });

        //assertion to verify whether the text is displayed properly or not 
        await expect(WaitPage.helloWorldHeader).toHaveText("Hello World!");

    });

    it('Wait for the hidden element test cases to disappear', async () => {

        //click on Start button 
        await WaitPage.clickStartButton();
        //first let us wait for the loading icon to be displayed or to appear 
        await WaitPage.waitforElementtoDisappear();
        //assertion to verify whether the text is displayed properly or not 
        await expect(WaitPage.helloWorldHeader).toHaveText("Hello World!");

        //await browser.pause(10000);-- this is advised not to use because it will wait for the whole 
        //10 seconds to satisfy the condition, wherease the other wait category - the timoeouts - if the element
        //appears within 5 seconds and if we give 10 seconds, then it will not wait for whole 10 seconds 
        //for the element to appear

    });

});
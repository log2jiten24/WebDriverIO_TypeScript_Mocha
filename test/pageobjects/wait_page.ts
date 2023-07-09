
class WaitPage {

    private get startButton() { return $("#start>button") }
    get helloWorldHeader() { return $("#finish>h4") }
    get loadingIcon() { return $("#loading") }

    async clickStartButton() {
        await this.startButton.click();
    }

    async waitforElementtoDisappear() {

        await this.loadingIcon.waitForDisplayed();
        //we will wait for the wait Displayed Icon to disappear - by giving the condition reverse : true 
        await this.loadingIcon.waitForDisplayed({ reverse: true, timeout: 10000, timeoutMsg: "Loading Icon disappear" })
    }

}

export default new  WaitPage
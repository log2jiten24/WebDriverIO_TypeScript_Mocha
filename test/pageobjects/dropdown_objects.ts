class DropdownPage {

    get skillsDropdown() { return $("//select[@id = 'Skills']") };

    private get countryContainer() { return $("//span[@aria-labelledby='select2-country-container']") }
    private get searchInput() { return $("//input[@type='search']") }
    private get passwordInput() { return $("#firstpassword") }


    //select dropdown value by passing the text 
    async selectDropDownText (countryname : string) {

        const countryElement = $(`//span[@class= 'select2-results']/ul/li[text()= '${countryname}']`)
        //scroll the below webpage 
        await this.passwordInput.scrollIntoView() ;
        //click on the CountryContainer 
        await this.countryContainer.click();
        //set the country name 
        await this.searchInput.setValue(countryname) ;
        //perform the click on the countryName 
        await countryElement.click();

    }

    
}
export default new DropdownPage();    
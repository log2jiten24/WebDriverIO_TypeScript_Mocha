describe('Login Feature', () => {

    describe("Valid Login Details", () => {

        //it will execute before each of the it block test case 
        beforeEach("Before each test case", () => {
            console.log('I am login Application before each ');

        })
        //it will execute before each of the block 
        before("Before each test case", () => {
            console.log('I am login Application ');

        })

        it('Test Case 01', () => {
            console.log('Test Case 01 Body');

        })

        it('Test Case 02', () => {
            console.log('Test Case 02 Body');

        })

        afterEach("Logout test case ", () => {
            console.log('I am logout Application After Each  ');
        })

        after("Logout test case ", () => {
            console.log('I am logout Application ');
        })
    })


    describe("Invalid Login Details ", () => {

        //to skip the third test case 
        it.skip('Test Case 03', () => {
            console.log('Test Case 03 Body');

        })

        it('Test Case 05', () => {
            console.log('Test Case 05 Body');

        })

        it('Test Case 06', () => {
            console.log('Test Case 06 Body');

        })
        //if we give aftereach - it will execute after every it block test case
        afterEach("Logout test case ", () => {
            console.log('I am logout Application After Each  ');
        })
        // if we give after block - it will execute at the end of all the it block test case 
        after("Logout test case ", () => {
            console.log('I am logout Application ');
        })

    })

    //if we give only - it will execute specific test case only 
    // it.only('Test Case 01' , () => {
    //     console.log('Test Case 01 Body');

    // })



})
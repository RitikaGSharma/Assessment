import{test} from '@playwright/test';
import{expect} from '@playwright/test'
import { LoginPage } from '../pages/login';
import{Terms} from '../pages/terms';
import { Config } from '../playwright.config';

test("Valid login",async function({page,baseURL}) // test case for login functionality
{ //instance creation for class Loginpage
    const signin = new LoginPage(page)
    // launching the application
    await  page.goto(baseURL)
   // assigning the value to username and password
   await signin.login('ritikaritz16@gmail.com','12345678') 
   //Asserting that the title of the page matches the expected value
   expect(page).toHaveTitle("Dashboard") 
}) 

test("ForgotPassword",async function({page,baseURL})// test case to check forgot password functionality
{
    const signin = new LoginPage(page)
    // launching the application
    await  page.goto(baseURL)

    await signin.fgtpassword('ritikaritz16@gmail.com')
    
   expect(message.includes("sent")).toBeTruthy()
   

})
test("View terms & conditions",async function({page,baseURL}) //test case to view terms and conditions
{
    
    const view= new Terms(page);
    await page.goto(baseURL);
    view.terms();
   
   
   

   expect(page.url().includes("TermsAndCondition.aspx")).toBeTruthy 
})
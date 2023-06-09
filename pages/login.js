
exports.LoginPage=class LoginPage
{

    constructor(page)
    {
     this.page=page
    this.username_txt = page.locator ("//input[contains(@id='txtUserLogin']")
    this.password_txt=page.locator("//input[contains(@id='txtPassword']")
    this.login_button=page.locator("//input[contains(@name='btnLoginn']")
    this.forgotpass=  page.locator("//a[contains(@id='ForgetPassword']")
    this.forgotTxt=page.locator("//input[contains(@id,'txtEmailId')]")
  }
    
  async login(username,password)
    {
        await this.username_txt.fill(username)
        await this.password_txt.fill(password)
        await this.login_button.click()


    }
    async fgtpassword(forgotuser)
    {
await this.forgotpass.click()
await this.forgotTxt.fill(forgotuser)
    }
}
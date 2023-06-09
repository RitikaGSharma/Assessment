exports.Terms=class Terms{
    constructor(page)
    {
        this.page=page;
        this.termsconditions=page.locator("//a[normalize-space()='Terms & Conditions']")
    }

    async terms()
    {
      
        await this.termsconditions.click();
        
        
        
    }
}
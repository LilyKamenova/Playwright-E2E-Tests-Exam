const { test, describe, beforeEach, afterEach, beforeAll, afterAll, expect } = require('@playwright/test');
const { chromium } = require('playwright');

const host = 'http://localhost:3000';

let browser;
let context;
let page;

let user = {
    email : "",
    password : "123456",
    confirmPass : "123456",
};

let bookTitle = "";

describe("e2e tests", () => {
    beforeAll(async () => {
        browser = await chromium.launch();
    });

    afterAll(async () => {
        await browser.close();
    });

    beforeEach(async () => {
        context = await browser.newContext();
        page = await context.newPage();
    });

    afterEach(async () => {
        await page.close();
        await context.close();
    });

    
    describe("authentication", () => {
        test("Registration with Valid Data ", async()=>{
            await page.goto(host);
            await page.click("//a[text()='Register']");
            await page.waitForSelector("//form");
            let random = Math.floor(Math.random() * 10000);
            user.email = `user_${random}@abv.bg`;

            await page.fill("//input[@name='email']", user.email);
            await page.locator("//input[@name='password']").fill(user.password);
            await page.locator("//input[@name='conf-pass']").fill(user.confirmPass);
            await page.click("//button[text()='Register']");

            await expect(page.locator("//a[text()='Logout']")).toBeVisible();
            expect(page.url()).toBe(host + "/");

        });

        test("Login with Valid Data", async ()=>{
            await page.goto(host);
            await page.click("//a[text()='Login']");
            await page.waitForSelector("//form");

            await page.locator("//input[@name='email']").fill(user.email);
            await page.locator("//input[@name='password']").fill(user.password);
            await page.click("//button[text()='Login']");

            await expect(page.locator("//a[text()='Logout']")).toBeVisible();
            expect(page.url()).toBe(host + "/");

        });

        test("Logout from the Application ", async()=>{
            await page.goto(host);
            await page.click("//a[text()='Login']");
            await page.waitForSelector("//form");
            await page.locator("//input[@name='email']").fill(user.email);
            await page.locator("//input[@name='password']").fill(user.password);
            await page.click("//button[text()='Login']");

            await page.click("//a[text()='Logout']");
            
            await expect(page.locator("//a[text()='Login']")).toBeVisible();
            expect(page.url()).toBe(host + "/");
            
        });

               
    });

    describe("navbar", () => {

        test("Navigation for Logged-In User Testing", async()=>{
            await page.goto(host);
            await page.click("//a[text()='Login']");
            await page.waitForSelector("//form");
            await page.locator("//input[@name='email']").fill(user.email);
            await page.locator("//input[@name='password']").fill(user.password);
            await page.click("//button[text()='Login']");

            await expect(page.locator("//a[text()='Home']")).toBeVisible();
            await expect(page.locator("//a[text()='Collection']")).toBeVisible();
            await expect(page.locator("//a[text()='Search']")).toBeVisible();
            await expect(page.locator("//a[text()='Create Book']")).toBeVisible();
            await expect(page.locator("//a[text()='Logout']")).toBeVisible();

            await expect(page.locator("//a[text()='Login']")).toBeHidden();
            await expect(page.locator("//a[text()='Register']")).toBeHidden();
        });

        test("Navigation for Guest User Testing", async()=>{
            await page.goto(host);
            await expect(page.locator("//a[text()='Home']")).toBeVisible();
            await expect(page.locator("//a[text()='Collection']")).toBeVisible();
            await expect(page.locator("//a[text()='Search']")).toBeVisible();
            await expect(page.locator("//a[text()='Login']")).toBeVisible();
            await expect(page.locator("//a[text()='Register']")).toBeVisible();

            await expect(page.locator("//a[text()='Create Book']")).toBeHidden();
            await expect(page.locator("//a[text()='Logout']")).toBeHidden();

        });
        
    });

    describe("CRUD", () => {
        beforeEach(async()=>{
            await page.goto(host);
            await page.click("//a[text()='Login']");
            await page.waitForSelector("//form");
            await page.locator("//input[@name='email']").fill(user.email);
            await page.locator("//input[@name='password']").fill(user.password);
            await page.click("//button[text()='Login']");

        });

        test("Create a Book Testing", async()=>{
            await page.click("//a[text()='Create Book']");
            await page.waitForSelector("//form");
            let randomName = Math.floor(Math.random() * 1000000);
            bookTitle = `Book_Name${randomName}`; 

            await page.locator("//input[@id='title']").fill(bookTitle);
            await page.locator("//input[@id='coverImage']").fill("./images/toKillAMockingbird.jpg");
            await page.locator("//input[@id='year']").fill("1896");
            await page.locator("//input[@id='author']").fill("Some Autor Name");
            await page.locator("//input[@id='genre']").fill("Crime");
            await page.locator("//textarea[@name='description']").fill("Some Description here....");
            await page.click("//button[text()='Save']");

            await expect(page.locator(`//div[@class='book']//h2[text()='${bookTitle}']`)).toBeVisible();
            expect(page.url()).toBe(host + "/collection");
        });

        test("Edit a Book Testing", async()=>{
            await page.click("//a[text()='Create Book']");
            await page.waitForSelector("//form");
            let randomName = Math.floor(Math.random() * 1000000);
            bookTitle = `Book_Name${randomName}`; 

            await page.locator("//input[@id='title']").fill(bookTitle);
            await page.locator("//input[@id='coverImage']").fill("./images/toKillAMockingbird.jpg");
            await page.locator("//input[@id='year']").fill("1896");
            await page.locator("//input[@id='author']").fill("Some Autor Name");
            await page.locator("//input[@id='genre']").fill("Crime");
            await page.locator("//textarea[@name='description']").fill("Some Description here....");
            await page.click("//button[text()='Save']");
            
                        
            await page.click("//a[text()='Search']");
            await page.waitForSelector("//form"); 
           await page.locator("//input[@type='text']").fill(bookTitle);
           await page.click("//button[text()='Search']");

           await page.click(`"//ul//li//a[text()='${bookTitle}']`);
            await page.click("//a[@class='edit-btn']");
            await page.waitForSelector("//form");
            bookTitle = bookTitle + "edited"
            await page.locator("//input[@id='title']").fill(bookTitle);
            await page.click("//button[text()='Save Changes' ]");

            await expect(page.locator(`//div[@class='book-card']//${bookTitle}`)).toBeVisible();

           
        });

        test("Delete a Book Testing", async()=>{
            await page.click("//a[text()='Search']");
            await page.locator("//input[@name='search']").fill(bookTitle);
            await page.click("//button[@type='submit']");

            await page.click("//li//a[1]");
            await page.click("//a[@class='delete-btn']"); 

            await expect(page.locator(`//section[@id='collectionPage']//div[@class='book']//h2']`, {hasText:bookTitle})).toHaveCount(0);
            await expect (page.url()).toBe(host + "/collection");
        });
    });
});
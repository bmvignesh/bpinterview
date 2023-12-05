const {test, expect} = require('@playwright/test');

test('UI Task',async ({page})=>{

    await page.goto('https://www.saucedemo.com/');

    await expect(await page.locator("//input[@id='user-name']")).toBeVisible();
    await expect(await page.locator("//input[@id='user-name']")).toBeEmpty();
    await expect(await page.locator("//input[@id='user-name']")).toBeEditable();
    await expect(await page.locator("//input[@id='user-name']")).toBeEnabled();

    await expect(await page.locator("//input[@id='password']")).toBeVisible();
    await expect(await page.locator("//input[@id='password']")).toBeEmpty();
    await expect(await page.locator("//input[@id='password']")).toBeEditable();
    await expect(await page.locator("//input[@id='password']")).toBeEnabled();
    
    await page.locator("//input[@id='user-name']").fill("standard_user")

    await page.locator("//input[@id='password']").fill("secret_sauce")

    await page.click("//input[@id='login-button']")

    await page.waitForTimeout(1000);

    await page.click("//button[@id='add-to-cart-sauce-labs-backpack']")
    await page.click("//button[@id='add-to-cart-sauce-labs-bike-light']")
    await page.click("//button[@id='add-to-cart-sauce-labs-bolt-t-shirt']")
    await page.click("//button[@id='add-to-cart-sauce-labs-fleece-jacket']")
    await page.click("//button[@id='add-to-cart-sauce-labs-onesie']")
    await page.click("//button[@id='add-to-cart-test.allthethings()-t-shirt-(red)']")

    await page.click("//a[@class='shopping_cart_link']")

    await expect(await page.locator('.shopping_cart_badge').textContent()).toEqual("6")

    await page.click("//button[@id='checkout']")

    await page.locator("//input[@id='first-name']").fill("Tom")

    await page.locator("//input[@id='last-name']").fill("Jerry")

    await page.locator("//input[@id='postal-code']").fill("400001")

    await page.click("//input[@id='continue']")
    
    await page.click("//button[@id='finish']")

    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html')
    
    await page.waitForTimeout(1000);

})

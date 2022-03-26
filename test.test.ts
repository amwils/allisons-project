import { Builder, Capabilities } from "selenium-webdriver"

import { succulentnative } from "./pageObjects"

const chromedriver= require('chromedriver')

const myTest = new succulentnative

test("Find blog post", async () => {
    await myTest.navigate()
    await myTest.driver.sleep(2000)
    await myTest.click(myTest.plantLoveClub)
    await myTest.click(myTest.blogBtn)
    await myTest.click(myTest.blogPostBtn)
    await myTest.driver.sleep(2000)
    let response = await myTest.getText(myTest.theAustinChronicle)
    expect(response).toContain("The Austin Chronicle Critics Pick Succulent Native as Best of Austin 2018")
   
});

test("Plant Care Intructions", async () => {
    await myTest.navigate()
    await myTest.driver.sleep(2000)
    await myTest.click(myTest.aboutBtn)
    await myTest.click(myTest.PlantCareBtn)
    await myTest.driver.sleep(2000)
    let response = await myTest.getText(myTest.ArrangementCare)
    expect(response).toContain("Arrangement Care Instructions")
    
});

test("Search by Category", async () => {
    await myTest.navigate()
    await myTest.driver.sleep(2000)
    await myTest.click(myTest.shopBtn5)
    await myTest.click(myTest.cardsBTn)
    await myTest.driver.sleep(2000)
    let response = await myTest.getText(myTest.visitUS)
    expect(response).toContain("Visit us in-store or shop online for pick-up, shipping, or delivery!")
    
});

test("Sort Z-A", async () => {
    await myTest.navigate()
    await myTest.driver.sleep(2000)
    await myTest.click(myTest.shopBtn3)
    await myTest.click(myTest.dropDownBtn)
    await myTest.click(myTest.zToABtn)
    let response = await myTest.getText(myTest.filterBy)
    expect(response).toContain("Filter by")

});

test("Add Card", async () => {
    await myTest.navigate()
    await myTest.driver.sleep(2000)
    await myTest.click(myTest.shopBtn2)
    await myTest.click(myTest.scallopedBtn)
    await myTest.click(myTest.addCardBtn)
    await myTest.click(myTest.aloeBtn)
    await myTest.setInput(myTest.nameInput, "Mom")
    await myTest.driver.sleep(2000)
    await myTest.click(myTest.noteInput)
    await myTest.setInput(myTest.noteInput, "Have a great day!")
    await myTest.driver.sleep(2000)
    let response = await myTest.getText(myTest.haveAgreatDay)
    expect(response).toContain("Have a great day!")
    
});

test("Add to Cart", async () => {
    await myTest.navigate()
    await myTest.driver.sleep(2000)
    await myTest.click(myTest.shopBtn4)
    await myTest.click(myTest.tinyBabiesBtn)
    await myTest.click(myTest.colorBtn)
    await myTest.click(myTest.addToCartBtn3)
    await myTest.driver.sleep(5000)
    let response = await myTest.getText(myTest.cutstomMarbled)
    expect(response).toContain("Custom Marbled Tiny Babies")
    await myTest.driver.quit()

});
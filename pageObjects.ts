import { By, WebDriver } from "selenium-webdriver"; 
import {BasePage} from "./basePage" 

export class succulentnative extends BasePage {
    driver: WebDriver
    url: string

    //add card test
    shopBtn2: By = By.xpath('(//p[@class="_1zyfI"])[1]')
    scallopedBtn: By = By.xpath('(//img[@class="_1Pw1g _2njIg _3_xjv"])[1]')
    addCardBtn: By = By.xpath('(//span[@class="buttonnext1002411228__content"])[1]')
    aloeBtn: By = By.xpath('(//span[@class="Text1565404569__root Text1565404569---typography-11-runningText Text1565404569---priority-7-primary DropdownOption1811443392__title"])[1]')
    nameInput: By = By.xpath('(//textarea[@data-hook="text-option-text-area"])[1]')
    noteInput: By = By.xpath('(//textarea[@data-hook="text-option-text-area"])[2]')
    addToCartBtn2: By = By.xpath('(//span[@class="buttonnext1002411228__content"])[2]')
    haveAgreatDay: By = By.xpath('(//textarea[@data-hook="text-option-text-area"])[2]')

    //sort Z-A test
    shopBtn3: By = By.xpath('(//p[@class="_1zyfI"])[1]')
    dropDownBtn: By = By.xpath('(//span[@class="sXoZ_p"])[1]')
    zToABtn: By = By.xpath('//span[text()="Name Z-A"]')
    filterBy: By = By.xpath('//h2[@class="_1X154"]')

    //plant cart instructions test
    aboutBtn: By = By.xpath('(//p[@class="_1zyfI"])[6]')
    PlantCareBtn: By = By.xpath('(//span[@style="text-decoration:underline;"])[14]')
    ArrangementCare: By = By.xpath('(//span[@style="font-family:avenir-lt-w01_35-light1475496,sans-serif;"])[4]')

    //add to cart
    shopBtn4: By = By.xpath('(//p[@class="_1zyfI"])[1]')
    tinyBabiesBtn: By = By.xpath('(//img[@class="_1Pw1g _2njIg _3_xjv"])[6]')
    colorBtn: By = By.xpath('(//div[@class="ColorPickerItem569978716__radioInner"])[2]')
    addToCartBtn3: By = By.xpath('//span[@class="buttonnext1002411228__content"]')
    cutstomMarbled: By = By.xpath('//h1[@class="_2qrJF"]')

    //search by category test
    shopBtn5: By = By.xpath('(//p[@class="_1zyfI"])[1]')
    cardsBTn: By = By.xpath('(//label[@class="wixSdkShowFocusOnSibling _1mAkz"])[6]')
    visitUS: By = By.xpath('//span[@style="font-size:26px;"]')

    //select blog post test
    plantLoveClub: By = By.xpath('(//div[@class="_1u8sp"])[2]')
    blogBtn: By = By.xpath('//ul[@id="comp-irwryozimoreContainer"]')
    blogPostBtn: By = By.xpath('(//div[@class="blog-post-homepage-title-color blog-post-homepage-title-font y0e1Q"])[4]')
    theAustinChronicle: By = By.xpath('//span[@class="blog-post-title-font blog-post-title-color"]')




    





    constructor() {
        super({url: 'https://www.succulentnative.com/'})
    }
}
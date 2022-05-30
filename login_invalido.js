//criando const do selenium//
const { Builder, By, Key } = require("selenium-webdriver");
const chrome = require ('selenium-webdriver/chrome');
const chromedriver = require ('chromedriver');

    chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());



    //criando função para automação//

async function run() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://automationpractice.com/index.php');

    //entra na pagina de login//

    await driver.findElement(By.className("login")).click();

    //login inválido//
     
    const xpto = await driver.findElement(By.name("email"));
    
    await xpto.sendKeys("xpto@gmail.com");

    const senhai = await driver.findElement(By.name("passwd"));
    
    await senhai.sendKeys("xpto");

    await driver.findElement(By.name("SubmitLogin")).click();


//print do teste

driver.takeScreenshot().then(function(data){
    var base64Data = data.replace(/^data:image\/png;base64,/,"")
    fs.writeFile("resultIMG/login_invalido.png", base64Data, 'base64', function(err) {
         if(err) console.log(err);
    });
 });

    
    driver.quit();
}
run();







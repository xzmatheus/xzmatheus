//criando const do selenium//
const { Builder, By, Key } = require("selenium-webdriver");
const chrome = require ('selenium-webdriver/chrome');
const chromedriver = require ('chromedriver');
let opts = new chrome.Options();
let fs = require('fs');

 chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());
    //criando função para automação//

async function run() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://automationpractice.com/index.php');

    //entrar na pagina de login//

    await driver.findElement(By.className("login")).click();

    //login com sucesso //

    const searchBar = await driver.findElement(By.name("email"));

    await searchBar.sendKeys("xzmatheusl@gmail.com");

    const senha = await driver.findElement(By.name("passwd"));

    await senha.sendKeys("xz5127912");

    await driver.findElement(By.name("SubmitLogin")).click();

    //print do teste

    driver.takeScreenshot().then(function(data){
        var base64Data = data.replace(/^data:image\/png;base64,/,"")
        fs.writeFile("resultIMG/login.png", base64Data, 'base64', function(err) {
             if(err) console.log(err);
        });
     });
 
    await driver.quit();
}

run();

let backButton = document.getElementById('backButton05');
let cookie = document.getElementById('cookie');
let cookieTracker = document.getElementById('cookieTracker');
let cookiesPerSec = document.getElementById('cookiesPerSec');

//buy
let constantClickerBtn = document.getElementById('product0');
let buyGrandmaBtn = document.getElementById('product1');
let buyFarmBtn = document.getElementById('product2');
let buyFactoryBtn = document.getElementById('product3');

//upgrades
let cursorUpgradeBtn = document.getElementById('upgrade0');
let grandmaUpgradeBtn = document.getElementById('upgrade1');
let farmUpgradeBtn = document.getElementById('upgrade2');
let factoryUpgradeBtn = document.getElementById('upgrade3');

backButton.addEventListener("click",function(){
    window.location.replace('/');

});

//game 
const state = {
    cookieCount: 0,
    upgradeClickers: 0,
    grandmas: 0,
    factories: 0,
    clicks: 1,
    constant: false,
}

const cursor = {
    price: 15,
    cookiesPerSec: 0.1,
    count: 0,
    has: false,
    multiplier: 1.2,
    ui: document.getElementById('cursorPrice')
}

const cursorUpgrade ={
    price: 250,
    multiplier: 1.5,
    ui: document.getElementById('cursorUpgradePrice')
}

const grandmas = {
    price: 100,
    cookiePerSec: 1, 
    count: 0,
    has: false,
    multiplier: 1.2,
    ui: document.getElementById('grandmaPrice')
}

const grandmaUpgrade ={
    price: 1000,
    multiplier: 1.5,
    ui: document.getElementById('grandmaUpgradePrice')
}

const farms = {
    price: 1100,
    cookiesPerSec: 8,
    count: 0,
    has: false,
    multiplier: 1.2,
    ui: document.getElementById('farmPrice')
}

const farmUpgrade ={
    price: 11000,
    multiplier: 1.5,
    ui: document.getElementById('farmUpgradePrice')
}

const factories = {
    price: 12000,
    cookiePerSec: 47,
    count: 0,
    has: false,
    multiplier: 1.2,
    ui: document.getElementById('factoryPrice')
}

const factoryUpgrade ={
    price: 120000,
    multiplier: 1.5,
    ui: document.getElementById('factoryUpgradePrice')
}

cookie.addEventListener("click", function(){
    increaseScore();
});

function displayScore(){
    cookieTracker.innerHTML = parseInt(state.cookieCount);
}

function displayCookiesPerSec(){
   //let x = (cursor.cookiesPerSec * cursor.count) + (grandmas.cookiePerSec * grandmas.count) + (factories.cookiePerSec * factories.count);
    let x = 0;
    if(cursor.has)
    {
        x += cursor.cookiesPerSec * cursor.count;
    }

    if(grandmas.has){
        x += grandmas.cookiePerSec * grandmas.count;
    }

    if(farms.has){
        x += farms.cookiesPerSec * farms.count;
    }

    if(factories.has){
        x += factories.cookiePerSec * factories.count;
    }
    console.log(x);
    cookiesPerSec.innerHTML = "Cookies per second: " + parseFloat(x.toFixed(2));
}

function increaseScore(){
    state.cookieCount += state.clicks;
    displayScore();
}

function setPricesUi(){
    cursor.ui.innerHTML = parseInt(cursor.price);
    grandmas.ui.innerHTML = parseInt(grandmas.price);
    farms.ui.innerHTML = parseInt(farms.price);
    factories.ui.innerHTML = parseInt(factories.price);

    cursorUpgrade.ui.innerHTML = parseInt(cursorUpgrade.price);
    grandmaUpgrade.ui.innerHTML = parseInt(grandmaUpgrade.price);
    farmUpgrade.ui.innerHTML = parseInt(farmUpgrade.price);
    factoryUpgrade.ui.innerHTML = parseInt(factoryUpgrade.price);

}

// function displayUpgrades(){
//     if(cursor.count <= 3)
//     {
//         cursorUpgradeBtn.style.display = "none";
//     }
//     else if(cursor.count >= 3)
//     {
//         cursorUpgradeBtn.style.display = "inline-block";
//     }

//     if(grandmas.count <= 3){
//         grandmaUpgradeBtn.style.display = "none";
//     }
//     else{
//         grandmaUpgradeBtn.style.display = "inline-block";
//     }

//     if(farms.count <= 3){
//         farmUpgradeBtn.style.display = "none"
//     }
//     else{
//         farmUpgradeBtn.style.display = "inline-block"
//     }

//     if(factories.count <=3){
//         factoryUpgradeBtn.style.display = "none"
//     }
//     else{
//         factoryUpgradeBtn.style.display = "inline-block"
//     }
// }

//buy buttons
constantClickerBtn.addEventListener("click", function(){
    if(state.cookieCount >= cursor.price){
        state.cookieCount -= cursor.price;
        displayScore();
       
        if(!cursor.has){
            cursor.has = true;
        }

        cursor.count ++; 
        cursor.price *= cursor.multiplier;
        cursor.price = Math.ceil(cursor.price);
        displayCookiesPerSec();
        setPricesUi();
        //displayUpgrades();
    }
});

buyGrandmaBtn.addEventListener("click", function(){
    if(state.cookieCount >= grandmas.price){
        state.cookieCount -= grandmas.price;
        displayScore();
        
        if(!grandmas.has){
            grandmas.has = true;
        }
        grandmas.count ++;
        grandmas.price *= grandmas.multiplier;
        grandmas.price = Math.ceil(grandmas.price);
        console.log(grandmas);
        displayCookiesPerSec();
        setPricesUi();
        //displayUpgrades();
    }
});

buyFarmBtn.addEventListener("click", function(){
    if(state.cookieCount >= farms.price){
        state.cookieCount -= farms.price;
        displayScore();
        
        if(!farms.has){
            farms.has = true;
        }

        farms.count ++;
        farms.price *= farms.multiplier;
        farms.price = Math.ceil(farms.price);
        displayCookiesPerSec();
        setPricesUi();
        //displayUpgrades();
    }
});

buyFactoryBtn.addEventListener("click", function(){
    console.log("clicked");
    if(state.cookieCount >= factories.price){
        state.cookieCount -= factories.price;
        displayScore();
        
        if(!factories.has)
        {
            factories.has = true;
        }
        factories.count ++;
        factories.price *= factories.multiplier;
        factories.price = Math.ceil(factories.price);
        console.log(factories);
        displayCookiesPerSec();
        setPricesUi();
        //displayUpgrades();
    }
});


//upgrades
cursorUpgradeBtn.addEventListener("click", function(){
    if(state.cookieCount >= cursorUpgrade.price){
        state.cookieCount -= cursorUpgrade.price
        displayScore();
        
        cursor.cookiesPerSec *= 2;
        state.clicks *= 2;

        cursorUpgrade.price *= cursorUpgrade.multiplier;
        cursorUpgrade.price = Math.ceil(cursorUpgrade.price);
        displayCookiesPerSec();
        setPricesUi();
    }
});

grandmaUpgradeBtn.addEventListener("click", function(){
    if(state.cookieCount >= grandmaUpgrade.price){
        state.cookieCount -= grandmaUpgrade.price;
        displayScore();
        
        grandmas.cookiePerSec *= 2;

        grandmaUpgrade.price *= grandmaUpgrade.multiplier;
        grandmaUpgrade.price = Math.ceil(grandmaUpgrade.price);
        displayCookiesPerSec();
        setPricesUi();
    }
});

farmUpgradeBtn.addEventListener("click", function(){
    if(state.cookieCount >= farmUpgrade.price){
        state.cookieCount -= farmUpgrade.price;
        displayScore();
        
        farms.cookiesPerSec *= 2;
        farmUpgrade.price *= farmUpgrade.multiplier;
        farmUpgrade.price = Math.ceil(farmUpgrade.price);
        displayCookiesPerSec();
        setPricesUi();
    }
})

factoryUpgradeBtn.addEventListener("click", function(){
    if(state.cookieCount >= factoryUpgrade.price){
        state.cookieCount -= factoryUpgrade.price;
        displayScore();
        
        factories.cookiePerSec *= 2;

        factoryUpgrade.price *= factoryUpgrade.multiplier;
        factoryUpgrade.price = Math.ceil(factoryUpgrade.price);
        displayCookiesPerSec();
        setPricesUi();
    }
});

displayScore();
displayCookiesPerSec();
setPricesUi();
//displayUpgrades();

//use set interval for per second cookie 

function cursors(){
    if(cursor.has){
        state.cookieCount += cursor.cookiesPerSec * cursor.count;
        displayScore();
    }
    
}

function grandma(){
    if(grandmas.has){
        state.cookieCount += grandmas.cookiePerSec * grandmas.count; 
        console.log(grandmas.cookiePerSec * grandmas.count);
        displayScore();
    }
    
}

function factory(){
    if(factories.has){
        state.cookieCount += factories.cookiePerSec * factories.count;
        displayScore();
    }
   
}




setInterval(cursors, 1000);
setInterval(grandma, 1000);
setInterval(factory, 1000);



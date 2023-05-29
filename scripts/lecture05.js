let backButton = document.getElementById('backButton05');
let cookie = document.getElementById('cookie');
let cookieTracker = document.getElementById('cookieTracker');
let cookiesPerSec = document.getElementById('cookiesPerSec');


let constantClickerBtn = document.getElementById('constantClick');
let buyGrandmaBtn = document.getElementById('grandma');
let buyFactoryBtn = document.getElementById('factory');
let cursorUpgradeBtn = document.getElementById('cursorUpgradeBtn');
let grandmaUpgradeBtn = document.getElementById('grandmaUpgradeBtn');
let factoryUpgradeBtn = document.getElementById('factoryUpgradeBtn');

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
    multiplier: 1.2
}

const cursorUpgrade ={
    price: 250,
    multiplier: 1.5
}

const grandmas = {
    price: 100,
    cookiePerSec: 1, 
    count: 0,
    has: false,
    multiplier: 1.2
}

const grandmaUpgrade ={
    price: 1000,
    multiplier: 1.5
}

const factories = {
    price: 1000,
    cookiePerSec: 0,
    count: 0,
    has: false,
    multiplier: 1.2
}

const factoryUpgrade ={
    price: 5000,
    multiplier: 1.5
}

cookie.addEventListener("click", function(){
    increaseScore();
});

function displayScore(){
    cookieTracker.innerHTML = parseInt(state.cookieCount);
}

function displayCookiesPerSec(){
    let x = (cursor.cookiesPerSec * cursor.count) + (grandmas.cookiePerSec * grandmas.count) + (factories.cookiePerSec * factories.count);
    cookiesPerSec.innerHTML = "Cookies per second: " + parseFloat(x);
}

function increaseScore(){
    state.cookieCount += state.clicks;
    displayScore();
}


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
    }
});

buyFactoryBtn.addEventListener("click", function(){
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
    }
});


//upgrades
cursorUpgradeBtn.addEventListener("click", function(){
    if(state.cookieCount >= cursorUpgrade.price){
        state.cookieCount -= cursorUpgrade.price
        displayScore();
        displayCookiesPerSec();
        cursor.cookiesPerSec *= 2;
        state.clicks *= 2;

        cursorUpgrade.price *= cursorUpgrade.multiplier;
        cursorUpgrade.price = Math.ceil(cursorUpgrade.price);
    }
});

grandmaUpgradeBtn.addEventListener("click", function(){
    if(state.cookieCount >= grandmaUpgrade.price){
        state.cookieCount -= grandmaUpgrade.price;
        displayScore();
        displayCookiesPerSec();
        grandmas.cookiePerSec *= 2;

        grandmaUpgrade.price *= grandmaUpgrade.multiplier;
        grandmaUpgrade.price = Math.ceil(grandmaUpgrade.price);
    }
});

factoryUpgradeBtn.addEventListener("click", function(){
    if(state.cookieCount >= factoryUpgrade.price){
        state.cookieCount -= factoryUpgrade.price;
        displayScore();
        displayCookiesPerSec()
        factories.cookiePerSec *= 2;

        factoryUpgrade.price *= factoryUpgrade.multiplier;
        factoryUpgrade.price = Math.ceil(factoryUpgrade.price);
    }
});

displayScore();
displayCookiesPerSec();

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



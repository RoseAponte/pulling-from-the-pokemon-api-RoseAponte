///////Use DOM Selection to select items we want to change with AJAX////////////
const starter1 = document.querySelector('.starter1');
const starter1img = document.querySelector('.starter1img');
const cardText = document.querySelector('.card-text');
const recent = document.querySelector('.text-muted')
////////Create our Request to serve1
let xhr = new XMLHttpRequest();
////////Set up a callback function to run when server req is successful///////////
xhr.onreadystatechange = () => {
    ///////Create an if statement that asks if the server req is complete/////////////
    if(xhr.readyState === 4)
    ///////now server is complete create an if to see if connection succcessful///////
    if(xhr.status = 200) {
        ///////Body of the callback where we parse data and use DOM Manipulation//////////
        const data = JSON.parse(xhr.response);
        console.log(data);
        starter1.innerHTML = data.name;
        starter1img.src = data.sprites.front_default;
        cardText.innerHTML = data.abilities[0].ability.name;
        recent.innerHTML = data.game_indices[19].version.name;
        ///////Else if clause where we throw an error if we dont have success connecting//
    } else if(xhr.status === 404) {
        alert("Oh no the page wasn't found");
    } else if(xhr.status === 500) {
        alert("Awhh man the server is taking a break :(");
    }
};
///////open server request////////////////////////////////////////////////////////
xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/7");
///////send server request////////////////////////////////////////////////////////
xhr.send();
/////////////////////////////////////////////////////////////////////////////////
//////////////2nd XHR call///////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
////////Use DOM Selection to select items we want to change with AJAX////////////
const starter3 = document.querySelector('.starter3');
const starter3img = document.querySelector('.starter3img');
////////Create our Request to server
let xhr3 = new XMLHttpRequest();
////////Set up a callback function to run when server req is successful///////////
xhr3.onreadystatechange = () => {
///////Create an if statement that asks if the server req is complete/////////////
if(xhr3.readyState === 4)
///////now server is complete create an if to see if connection succcessful///////
if(xhr3.status = 200) {
///////Body of the callback where we parse data and use DOM Manipulation//////////
const data = JSON.parse(xhr3.response);
        console.log(data);
        starter3.innerHTML = data.name;
        starter3img.src = data.sprites.front_default;
        cardText.innerHTML = data.abilities[0].ability.name;
        recent.innerHTML = data.game_indices[19].version.name;
///////Else if clause where we throw an error if we dont have success connecting//
} else if(xhr3.status === 404) {
    alert("Oh no the page wasn't found");
} else if(xhr3.status === 500) {
    alert("Awhh man the server is taking a break :(");
}
};
///////open server request////////////////////////////////////////////////////////
xhr3.open("GET", "https://pokeapi.co/api/v2/pokemon/4");
///////send server request////////////////////////////////////////////////////////
xhr3.send();
/////////////////////////////////////////////////////////////////////////////////
//////////////3rd XHR call///////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
////////Use DOM Selection to select items we want to change with AJAX////////////
const starter2 = document.querySelector('.starter2');
const starter2img = document.querySelector('.starter2img');
////////Create our Request to server
let xhr2 = new XMLHttpRequest();
////////Set up a callback function to run when server req is successful///////////
xhr2.onreadystatechange = () => {
///////Create an if statement that asks if the server req is complete/////////////
if(xhr2.readyState === 4)
///////now server is complete create an if to see if connection succcessful///////
if(xhr2.status = 200) {
///////Body of the callback where we parse data and use DOM Manipulation//////////
const data = JSON.parse(xhr2.response);
        console.log(data);
        starter2.innerHTML = data.name;
        starter2img.src = data.sprites.front_default;
        cardText.innerHTML = data.abilities[0].ability.name;
        recent.innerHTML = data.game_indices[19].version.name;
///////Else if clause where we throw an error if we dont have success connecting//
} else if(xhr2.status === 404) {
    alert("Oh no the page wasn't found");
} else if(xhr2.status === 500) {
    alert("Awhh man the server is taking a break :(");
}
};
///////open server request////////////////////////////////////////////////////////
xhr2.open("GET", "https://pokeapi.co/api/v2/pokemon/1");
///////send server request////////////////////////////////////////////////////////
xhr2.send();
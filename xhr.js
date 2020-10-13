///////Use DOM Selection to select items we want to change with AJAX////////////
const starter3 = document.querySelector('.starter3');
const starter3img = document.querySelector('.starter3img');
////////Create our Request to server
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
        starter3.innerHTML = data.name;
        starter3img.src = data.sprites.front_default;
///////Else if clause where we throw an error if we dont have success connecting//
    } else if(xhr.status === 404) {
        alert("Oh no the page wasn't found");
    } else if(xhr.status === 500) {
        alert("Awhh man the server is taking a break :(");
    }
};
///////open server request////////////////////////////////////////////////////////
xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/404");
///////send server request////////////////////////////////////////////////////////
xhr.send();
/////////////////////////////////////////////////////////////////////////////////
//////////////2nd XHR call///////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

////////Use DOM Selection to select items we want to change with AJAX////////////

////////Create our Request to server

////////Set up a callback function to run when server req is successful///////////

///////Create an if statement that asks if the server req is complete/////////////

///////now server is complete create an if to see if connection succcessful///////

///////Body of the callback where we parse data and use DOM Manipulation//////////

///////Else if clause where we throw an error if we dont have success connecting//

///////open server request////////////////////////////////////////////////////////

///////send server request////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////

//////////////3rd XHR call///////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////

////////Use DOM Selection to select items we want to change with AJAX////////////

////////Create our Request to server

////////Set up a callback function to run when server req is successful///////////
///////Create an if statement that asks if the server req is complete/////////////
///////now server is complete create an if to see if connection succcessful///////
///////Body of the callback where we parse data and use DOM Manipulation//////////
///////Else if clause where we throw an error if we dont have success connecting//
///////open server request////////////////////////////////////////////////////////
///////send server request////////////////////////////////////////////////////////
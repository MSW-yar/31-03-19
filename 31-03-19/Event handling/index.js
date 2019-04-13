// let getTags= document.getElementById('app');
// let getChild = document.getElementById('btn');

// getChild.onclick = function(event){
//     console.log(event);
//     createElement('h1')
// }
// function appendDOM(element){
//     getTags.appendChild(element);
// }

// function createElement(newelement){
//     appendDOM(document.createElement(newelement));
// }
// createElement('input')
let getParent = document.getElementById('app');
let newElement = creation('p');




function adding(parent,child){
    parent.appendChild(child);
}
function creation(string){
    return document.createElement(string);
    
}
function texting(text) {
    return document.createTextNode(text);
}



adding(getParent,newElement);
let textnod = texting('ELements apended');
adding(newElement,textnod);


let getButton = creation('button');
adding(getParent,getButton);
let gettextnod = texting('New button');
adding(getButton,gettextnod);

getButton.onclick = function (event){
    let newone = creation('h1');
    adding(getParent, newone);
    let getinp = document.getElementById('input');
    if (getinp.value === 'red'){
        getParent.className = 'red';
        
    }
//     console.log(valueadd);
//     adding(newone,valueadd);
//     getParent.className += 'class'
// }

let getinp= creation('input');
getinp.id = 'input'
adding(getParent,getinp);
// getinp.oninput = function (event){
//     console.log(event.target.value);    
// }

// getButton.onclick = function (event){
//     let newone = creation
// }


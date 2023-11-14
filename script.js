// let http = new XMLHttpRequest();
// let array = [];
// let itemsPerPage = 60;
// let currentPage = 1;
// let MainDiv = document.querySelector('.MainDiv')
// let buttons = document.querySelector(".buttons")
// function sendRequest(method, url, callback) {
//     http.open(method, url);
//     http.send();

//     http.onload = () => {
//         if (http.status >= 200 && http.status < 300) {
//             callback(http.responseText);
//         } else {
//             console.error(`Error: ${http.status} - ${http.statusText}`);
//         }
//     };
// }

// sendRequest("GET", "https://jsonplaceholder.typicode.com/photos", (response) => {
//     array = JSON.parse(response);
//     generateVisual(array);
//     generateButtons(array);
// });


// function generateVisual(array){
//     let startIndex = (currentPage - 1 ) * itemsPerPage;
//     let endIndex = startIndex + itemsPerPage;
// let empty = '';

//     for (let i = startIndex; i < endIndex; i++){
//         empty +=  
//         `
//         <h1>${array[i].id}</h1>
//   <img width="100" src="${array[i].url}">
//         `
//     }

//     MainDiv.innerHTML = empty;
    
// }


// function generateButtons(array){
// let totalItems = Math.ceil(array.length / itemsPerPage);
// let emptyButtons = "" ;

// for(let i = 1; i < totalItems; i ++){
// emptyButtons += 
// `
// <button id="butt">${i}</button>
// `
// }

// buttons.innerHTML = emptyButtons;


// let but  = document.querySelectorAll('#butt');

// but.forEach((btn) => {
//     btn.addEventListener("click" , function() {
//         let buttonTextContent = Number(btn.textContent);
//         currentPage  = buttonTextContent;
//         but.forEach((b) => {
//             b.classList.remove('active');
//         });

//         btn.classList.add('active')
//          generateVisual(array);
//     })
// })

// }

  
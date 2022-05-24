function fetchCarDataForDisplay(){
    console.log("function 1 works")
}

// function fetchCarDataForDisplay(){
//     var carObjects;
//     var xhttp = new XMLHttpRequest();
//     xhttp.overrideMimeType("application/json");
//     xhttp.open("GET","./JavaScript/cars.json", true);
//     xhttp.onreadystatechange = function(){
//         if (this.readyState == 4 && this.status == 200){
//             const carDisplay = document.getElementById("carDisplay");
//             carObjects = JSON.parse(xhttp.responseText);
//             console.log(carObjects);
//             for (let i in carObjects){
//                 let idString = String(carObjects[i].carID);
//                 carDisplay.innerHTML += `
//                 <div class="carObject">
//                     <div><img class="carImg" src="./carImages/${carObjects[i].Model}.jpeg"/></div>
//                     <div>${carObjects[i].Brand} - ${carObjects[i].Model} - ${carObjects[i].ModelYear}</div>
//                     <div>  <b>Mileage:</b>   ${carObjects[i].Mileage}</div>
//                     <div>  <b>Fuel Type:</b> ${carObjects[i].FuelType}</div>
//                     <div>  <b>Seat:</b>      ${carObjects[i].Seats}</div>
//                     <div>  <b>Price per day:</b> ${carObjects[i].Price_per_day}</div>
//                     <div>  <b>Availability:</b>  ${carObjects[i].Availability}</div>
//                     <div>  <b>Description:</b>   ${carObjects[i].Description}</div><div></div>
//                     <div> <button class="addToCartBtn" onClick="checkAvailavility(${idString})">Add to cart</button></div>
//                 </div>
//                 `;
                
//             };
//         };
//     };
//     xhttp.send();
// };

// var cartItem = [];
function checkAvailability(carIDArg){
    console.log(carIDArg)
}

// function checkAvailavility(carIDArg){
//     // var cartItem;
//     var carObjects;
//     var xhttp = new XMLHttpRequest();
//     xhttp.overrideMimeType("application/json");
//     xhttp.open("GET","./JavaScript/cars.json", true);
//     xhttp.onreadystatechange = function(){
//         if (this.readyState == 4 && this.status == 200){
//             const carDisplay = document.getElementById("carDisplay");
//             carObjects = JSON.parse(xhttp.responseText);
//             for (let i in carObjects){
//                 if (carObjects[i] == carIDArg){
//                     if (carObjects[i].Availability == false){
//                         alert("Sorry, this car is not available");
//                     }else if(cartItem.length > 0){
//                         var addToCart = true;
//                         for (let x in cartItem){
//                             if (cartItem[x].carID = carIDArg){
//                                 addToCart = false;
//                                 alert("This car is in your cart already");
//                                 break;
//                             }
//                         }
//                         if (addToCart) {
//                             cartItem += carObjects[i];
//                             sessionStorage.setItem(cartItem);
//                             alert("Add to cart successfully!");
//                         }
                        
//                     }else{
//                         cartItem += carObjects[i];
//                         sessionStorage.setItem(cartItem);
//                         alert("Add to cart successfully!");
//                     }
//                     break;
//                 }
//                 ;
//             };
//         };
//     };
//     xhttp.send();
//     console.log(cartItem);
// }
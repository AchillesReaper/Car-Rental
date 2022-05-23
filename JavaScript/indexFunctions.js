
function loadCars(){
    var xhttp = new XMLHttpRequest();
    const carDisaplay = document.getElementById("carDisplay");
    var obj;
    xhttp.open("GET", "JavaScript/cars.json", true);
    xhttp.overrideMimeType("appliction/json");
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            obj = JSON.parse(xhttp.responseText);            
            obj.forEach((car) => {
                console.log(car.carID);
                carDisaplay.innerHTML +=
                `<div class="carInstance">
                    <img class="carImage" src="carImages/${car.Model}.jpeg"></img>
                    <div>${car.Brand} - ${car.Model} - ${car.ModelYear}</div>                  
                    <div>  <b>Mileage:</b>   ${car.Mileage}</div>
                    <div>  <b>Fuel Type:</b> ${car.FuelType}</div>
                    <div>  <b>Seat:</b>      ${car.Seats}</div>
                    <div>  <b>Price per day:</b> ${car.Price_per_day}</div>
                    <div>  <b>Availability:</b>  ${car.Availability}</div>
                    <div>  <b>Description:</b>   ${car.Description}</div>    
                    <button class="AddToCartBtn" onclick = "checkAvailability(${car.carID})"> Add to Cart </button>
                </div><br>`;
                
            });
        }
    };
    xhttp.send()
}

var cartItem = [];


function checkAvailability(carIDArg){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "JavaScript/cars.json", true);
    xhttp.overrideMimeType("appliction/json");
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            const obj = JSON.parse(xhttp.responseText);
            var addToCart = true;
            obj.forEach((car) => {
                if (car.carID == carIDArg){
                    if (car["Availability"]==false){
                        alert("Sorry, the car is not available now. Please try other cars.");
                    }else if (cartItem.length>0){   
                        // check if the item is already added                  
                        for (let x in cartItem) {
                            if (cartItem[x].carID == carIDArg){
                                alert("This item is already in your cart");
                                addToCart = false;
                                break;
                            };
                        };
                        // if the item is not yet in the cart, add it to the cart
                        if (addToCart == true){
                            cartItem[cartItem.length] = car;
                            sessionStorage.setItem("cartItem", cartItem)
                            alert("Add to cart successfully!");
                        };
                    }else{
                        // this is the case when the cart is empty
                        cartItem[cartItem.length] = car;
                            sessionStorage.setItem("cartItem", cartItem)
                            alert("Add to cart successfully!");
                    }
                }
            });
        }
    };
    xhttp.send();
}

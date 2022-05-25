function fetchCarDataForDisplay(){
    let carObjects;
    let xhttp = new XMLHttpRequest();
    xhttp.overrideMimeType("application/json");
    xhttp.open("GET","./JavaScript/cars.json", true);
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            const carDisplay = document.getElementById("carDisplay");
            carObjects = JSON.parse(xhttp.responseText);
            console.log(carObjects);
            for (let i in carObjects){
                carDisplay.innerHTML += `
                <div class="carObject">
                    <div class="imgContainer"><img class="carImg" src="./carImages/${carObjects[i].Model}.jpeg"/></div>
                    <div class="carDes">
                        <div><b>${carObjects[i].Brand} - ${carObjects[i].Model} - ${carObjects[i].ModelYear}</b></div>
                        <div>  <b>Mileage:</b>   ${carObjects[i].Mileage}</div>
                        <div>  <b>Fuel Type:</b> ${carObjects[i].FuelType}</div>
                        <div>  <b>Seat:</b>      ${carObjects[i].Seats}</div>
                        <div>  <b>Price per day:</b> ${carObjects[i].Price_per_day}</div>
                        <div>  <b>Availability:</b>  ${carObjects[i].Availability}</div>
                        <div>  <b>Description:</b>   ${carObjects[i].Description}</div><div></div><br>
                        <div class="btnContainer"> 
                            <button class="addToCartBtn" onClick="checkAvailability('${carObjects[i].carID}')">Add to cart</button>
                        </div>
                    </div>    
                </div>
                `;
                
            };
        };
    };
    xhttp.send();
};

var cartItem = [];

function checkAvailability(carIDArg){
    let carObjects;
    let addToCart = true;
    let xhttp = new XMLHttpRequest();
    xhttp.overrideMimeType("application/json");
    xhttp.open("GET","./JavaScript/cars.json", true);
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            const carDisplay = document.getElementById("carDisplay");
            carObjects = JSON.parse(xhttp.responseText);
            for (let i in carObjects){
                if (carObjects[i].carID == carIDArg){
                    if (carObjects[i].Availability == false){
                        addToCart = false;
                        alert("Sorry, this car is not available");
                        break;
                    }else if(cartItem.length > 0){
                        for (let x in cartItem){
                            if (cartItem[x].carID == carIDArg){
                                addToCart = false;
                                alert("This car is in your cart already");
                                break;
                            }
                        }
                    };
                    if (addToCart == true) {
                        cartItem.push(carObjects[i]);
                        let updatedCartItem = JSON.stringify(cartItem);
                        sessionStorage.setItem("cartItem", updatedCartItem);
                        alert("Add to cart successfully!");
                    }
                }
            };
        };
        let text = sessionStorage.getItem("cartItem");
        console.log(text)
    };
    xhttp.send();
}

function goCarReservation(){
    let carReserved = JSON.parse(sessionStorage.getItem("cartItem"));
    if (carReserved[0] != null ){
        window.location.href = "./cart.html";
    }else{
        alert("No car has been reserved.")
    }
}
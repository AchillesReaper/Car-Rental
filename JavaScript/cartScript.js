
function readSession(){
    let cartItem = JSON.parse(sessionStorage.getItem("cartItem"));
    let priceArr=[];
    let idArr=[];
    let desArr=[];

    if (cartItem[0] == null){
        alert("No car has been reserved.")
        window.location.href = "index.html"
    }else{
        document.getElementById("cartItemTable").innerHTML += `
        <tr>
            <td><b>Thumbnail</b></td>
            <td><b>Vehicle</b></td>
            <td><b>Price Per Day</b></td>
            <td><b>Rental Days</b></td>
            <td><b>Actions</b></td>
        </tr>`;

        for (let i in cartItem) {
            document.getElementById("cartItemTable").innerHTML += `
            <tr>
                <td><img class="carThumbnail" src="carImages/${cartItem[i].Model}.jpeg"/></td>
                <td>${cartItem[i].Brand} - ${cartItem[i].Model} - ${cartItem[i].ModelYear}</td>
                <td>${cartItem[i].Price_per_day}</td>
                <td><input type="number" min="0" class="days" value="1"></td>
                <td><button onClick="removeCartItem('${cartItem[i].carID}')">Delete</td>
            </tr>
            `;
            idArr.push(cartItem[i].carID);
            let des = cartItem[i].Brand + "-" + cartItem[i].Model + "-" + cartItem[i].ModelYear;
            desArr.push(des);
            priceArr.push(cartItem[i].Price_per_day);
        };

        document.getElementById("cartItemTable").innerHTML +=`
        <tr><td colspan="5"><nav id="navBtn">    
            <button onclick="backToHome()">back to Home</button>
            <button onclick="pcdCheckOut()">Proceeding to CheckOut</button>
        </nav></td></tr>
        `;
    }
    
}

function removeCartItem(carIDArg){
    let cartItem = JSON.parse(sessionStorage.getItem("cartItem"));
    //cartItem now is an array of car object
    for (let i in cartItem){
        if (cartItem[i].carID == carIDArg){
            delete cartItem[i];
            break;
        };
    };
    sessionStorage.clear();
    const updatedCartItem = JSON.stringify(cartItem);
    sessionStorage.setItem("cartItem", updatedCartItem);
    readSession();
}

function pcdCheckOut() {
    let cartItem = JSON.parse(sessionStorage.getItem("cartItem"));
    let dayArr = document.getElementsByClassName("days");

    let totalPrice = 0;
    let rsvDetail = [];
    let dayValidation = true;

    for (let i in cartItem){
        if (dayArr[i].value < 1){
            dayValidation = false;
            alert("Rental duration cannot be less than 1 day.")
            break;
        }
        totalPrice += parseInt(dayArr[i].value)*parseInt(cartItem[i].Price_per_day);
        let rsvItem = {};
        rsvItem.carID = cartItem[i].carID;
        rsvItem.des = cartItem[i].Brand + cartItem[i].Model + cartItem[i].ModelYear;
        rsvItem.Price_per_day = cartItem[i].Price_per_day;
        rsvItem.rentalDays = dayArr[i].value;
        rsvDetail.push(rsvItem);
    };

    //store total price to session totalPrice
    if (dayValidation == true) {
        sessionStorage.setItem("totalPrice", totalPrice);
        let rsvDetailJ = JSON.stringify(rsvDetail);
        sessionStorage.setItem("rsvDetail", rsvDetailJ);
        window.location.href ="./checkOut.html"
    }
    
}

function backToHome(){
    window.location.href = "./index.html"
}
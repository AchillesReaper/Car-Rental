
function readSession(){
    let cartItem = JSON.parse(sessionStorage.getItem("cartItem"));
    let priceArr=[];
    let idArr=[];
    let desArr=[];

    if (cartItem.length < 1){
        alert("No car has been reserved.")
        window.location.href = "index.html"
    }else{
        document.getElementById("cartItemTable").innerHTML = `
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
                <td><input type="number" min="1" class="days" value="1"></td>
                <td><button onClick="removeCartItem('${cartItem[i].carID}')">Delete</td>
            </tr>
            `;
            idArr.push(cartItem[i].carID);
            let des = cartItem[i].Brand + "-" + cartItem[i].Model + "-" + cartItem[i].ModelYear;
            desArr.push(des);
            priceArr.push(cartItem[i].Price_per_day);
        };

        idArray = JSON.stringify(idArr);
        desArray = JSON.stringify(desArr);
        priceArray = JSON.stringify(priceArr);
        

        document.getElementById("cartItemTable").innerHTML += `
        <tr><td><button onclick="pcdCheckOut('${idArray}','${desArray}','${priceArray}')">Proceeding to CheckOut</button></td></tr>
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

function pcdCheckOut(idArray, desArray, priceArray) {
    let idArr = JSON.parse(idArray);
    let desArr = JSON.parse(desArray);
    let priceArr = JSON.parse(priceArray);
    let dayArr = document.getElementsByClassName("days");
    //prepare to create checkout items
    let checkOutItems = [];
    //calculate total price
    let totalPrice = 0;
    
    for (let i = 0; i < dayArr.length; i++){
        totalPrice += parseInt(dayArr[i].value)*priceArr[i];
        let checkOutItem = {};
        checkOutItem["id"] = idArr[i];
        checkOutItem["des"] = desArr[i];
        checkOutItem["price_per_day"] = priceArr[i];
        checkOutItem["renting_days"] = dayArr[i].value;
        checkOutItems.push(checkOutItem);
    };
    //store total price to session totalPrice
    sessionStorage.setItem("totalPrice", totalPrice);
    sessionStorage.setItem("checkOutItems", checkOutItems)
    window.location.href ="./checkOut.html"


}
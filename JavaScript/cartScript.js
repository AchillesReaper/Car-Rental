
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

        document.getElementById("cartItemTable").innerHTML += `
        <tr><td>
            <button onclick="pcdCheckOut()">Proceeding to CheckOut</button>
        </td></tr>
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

    for (let i in cartItem){
        totalPrice += parseInt(dayArr[i].value)*parseInt(cartItem[i].Price_per_day);
        let rsvItem = {};
        rsvItem.carID = cartItem[i].carID;
        rsvItem.des = cartItem[i].Brand + cartItem[i].Model + cartItem[i].ModelYear;
        rsvItem.Price_per_day = cartItem[i].Price_per_day;
        rsvItem.rentalDays = dayArr[i].value;
        rsvDetail.push(rsvItem);
    }

    //store total price to session totalPrice
    sessionStorage.setItem("totalPrice", totalPrice);
    let rsvDetailJ = JSON.stringify(rsvDetail);
    sessionStorage.setItem("rsvDetail", rsvDetailJ);
    window.location.href ="./checkOut.html"


}

function readSession(){
    const cartItem = sessionStorage.getItem("cartItem");
    cartItem.forEach((car) => {
        document.getElementById("cartItemTable").innerHTML += `
        <tr>
            <td><img src="carImages/${car.Model}.jpeg"/></td>
            <td>${car.Brand} - ${car.Model} - ${car.ModelYear}</td>
            <td>${car.Price_per_day}</td>
            <td><input type="number" min="0" class="amount"></td>
            <td><button onClick="removeCartItem(${car.carID})"></td>
        </tr>
        `
    });
}

function removeCartItem(carIDArg){
    const cartItem = sessionStorage.getItem("cartItem");
    for (let i in cartItem){
        if (cartItem[i].carID == carIDArg){
            delete cartItem[i];
            break;
        }
    };
    sessionStorage.setItem("cartItem", cartItem);
    document.getElementById("cartItemTable").innerHTML = `
        <tr>
        <td><b>Thumbnail</b></td>
        <td><b>Vehicle</b></td>
        <td><b>Price Per Day</b></td>
        <td><b>Rental Days</b></td>
        <td><b>Actions</b></td>
        </tr>
    `;
    readSession();
}
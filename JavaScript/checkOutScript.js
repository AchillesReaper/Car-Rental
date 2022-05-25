function getCheckOutPrice(){
    let checkOutPrice = sessionStorage.getItem("totalPrice");
    let text = "You are required to pay $"+checkOutPrice;
    document.getElementById("checkOutPrice").innerHTML = text;
    console.log(checkOutPrice)
}

function emailValidation(){
    storeCstmInfo();
    let mAdd = document.forms["reservationForm"]["cstmEmail"].value;
    let pattern= /\S+@\S+\.\S+/;
    if(!mAdd.match(pattern)){
        alert("Not a valid email format. Please check your input")
        return false;
    }
}

function storeCstmInfo(){
    let cstmInfo = {};

    cstmInfo.cstmFName = document.forms["reservationForm"]["cstmFName"].value;
    cstmInfo.cstmLName = document.forms["reservationForm"]["cstmLName"].value;
    cstmInfo.cstmEmail = document.forms["reservationForm"]["cstmEmail"].value;
    
    let cstmAdd1 = document.forms["reservationForm"]["cstmAdd1"].value;
    let cstmAdd2 = document.forms["reservationForm"]["cstmAdd2"].value;
    let cstmCity = document.forms["reservationForm"]["cstmCity"].value;
    let cstmState = document.forms["reservationForm"]["cstmState"].value;
    let cstmPCode = document.forms["reservationForm"]["cstmPCode"].value;
    cstmInfo.cstmAddress = cstmAdd1 + ", " + cstmAdd2 + ", " + cstmCity + ", " + cstmState + ", " + cstmPCode;

    cstmInfo.ptyMethod = document.forms["reservationForm"]["ptyMethod"].value;
    
    let cstmInfoJ = JSON.stringify(cstmInfo);
    console.log(cstmInfoJ);
    sessionStorage.setItem("cstmInfo", cstmInfoJ);
}
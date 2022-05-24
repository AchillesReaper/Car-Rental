function getCheckOutPrice(){
    let checkOutPrice = sessionStorage.getItem("totalPrice");
    document.getElementById("checkOutPrice").innerHTML = checkOutPrice;
    console.log(checkOutPrice)
}

function emailValidation(){
    let mAdd = document.forms["reservationForm"]["cstmEmail"].value;
    let pattern= /\S+@\S+\.\S+/;
    if(!mAdd.match(pattern)){
        alert("Not a valid email format. Please check your input")
        return false;
    }else{
        storeCstmInfo();
    }
}

function storeCstmInfo(){
    let cstmInfo = {};
    cstmInfo["cstmFName"] = document.forms["reservationForm"]["cstmFName"].value;
    cstmInfo["cstmLName"] = document.forms["reservationForm"]["cstmLName"].value;
    cstmInfo["cstmEmail"] = document.forms["reservationForm"]["cstmEmail"].value;
    cstmInfo["cstmAdd1"] = document.forms["reservationForm"]["cstmAdd1"].value;
    cstmInfo["cstmAdd2"] = document.forms["reservationForm"]["cstmAdd2"].value;
    cstmInfo["cstmCity"] = document.forms["reservationForm"]["cstmCity"].value;
    cstmInfo["cstmState"] = document.forms["reservationForm"]["cstmState"].value;
    cstmInfo["cstmPCode"] = document.forms["reservationForm"]["cstmPCode"].value;
    cstmInfo["ptyMethod"] = document.forms["reservationForm"]["ptyMethod"].value;
    cstmInfo["checkOutPrice"] = document.forms["reservationForm"]["checkOutPrice"].value;
    let customerInfo = JSON.stringify(cstmInfo);
    sessionStorage.removeItem("cstmInfo")
    sessionStorage.setItem("cstmInfo", customerInfo);
}
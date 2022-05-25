function loadDoc(){
    let cstmInfo = JSON.parse(sessionStorage.getItem("cstmInfo"));
    let rsvDetail = JSON.parse(sessionStorage.getItem("rsvDetail"));
    let totalPrice = JSON.parse(sessionStorage.getItem("totalPrice"));
    console.log(cstmInfo);
    console.log(rsvDetail);
    console.log(totalPrice);

    const ptyCfmText = "A total payment of <b>$"+ totalPrice + "</b> is received via "+ cstmInfo.ptyMethod;
    
    const emailText =  "Detailed terms and condition will sent to <b>" + cstmInfo.cstmEmail + "</b> shortly.";

    document.getElementById("ptyConfirm").innerHTML = ptyCfmText;
    document.getElementById("emailNts").innerHTML = emailText;

    document.getElementById("rsvDetail").innerHTML = `
    <tr>
        <td><b><u>Car Description</u></b></td>
        <td><b><u>Price per Day</u></b></td>
        <td><b><u>Rental Days</u></b></td>        
    </tr>`;

    for (let i in rsvDetail){
        document.getElementById("rsvDetail").innerHTML += `
        <tr>
            <td>${rsvDetail[i].des}</td>
            <td>${rsvDetail[i].Price_per_day}</td>
            <td>${rsvDetail[i].rentalDays}</td>          
        </tr>`;
    }

}
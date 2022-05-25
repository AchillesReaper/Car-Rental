function loadDoc(){
    let cstmInfo = JSON.parse(sessionStorage.getItem("cstmInfo"));
    let rsvDetail = JSON.parse(sessionStorage.getItem("rsvDetail"));
    let totalPrice = JSON.parse(sessionStorage.getItem("totalPrice"));
    console.log(cstmInfo);
    console.log(rsvDetail);
    console.log(totalPrice);

    // const ptyCfmText = "A total payment of "+ totalPrice + "is received via"+ cstmInfo.ptyMethod;
    
    // const emailText =  "Detailed terms and condition will sent to" + cstmInfo.cstmEmail + "shortly";

    // document.getElementById("ptyConfirm").innerHTML = ptyCfmText;
    // document.getElementById("emailNts").innerHTML = emailText;

    // document.getElementById("rsvDetail").innerHTML = `
    // <tr>
    //     <td><b>Car Description</b></td>
    //     <td><b>Price per Day</b></td>
    //     <td><b>Rental Days</b></td>
            
    // </tr>`;

    // for (i in rsvDetail){
    //     document.getElementById("rsvDetail").innerHTML = `
    //     <tr>
    //         <td>${rsvDetail[i].des}</td>
    //         <td>${rsvDetail[i].price_per_day}</td>
    //         <td>${rsvDetail[i].renting_days}</td>          
    //     </tr>`;
    // }

}
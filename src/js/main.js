


function parametir(){
    let uzunluq = Number(document.getElementById("uzunluq").value);
let en =Number(document.getElementById("en").value);
    let cavab = 2*(uzunluq+en);
    

    document.getElementById("netice").innerHTML= cavab;

    
}
function sahesi(){
    let uzunluq = Number(document.getElementById("uzunluq").value);
let en =Number(document.getElementById("en").value);
    let sahe = uzunluq+en;
    

    document.getElementById("netice").innerHTML= sahe;

    
}


// function checkMail(mail){

//     let email = mail.toLowerCase();

//     console.log(email.trim());
// }


// checkMail('   hello@Garage.az   ')
// checkMail('   heLLo@GaragE.az')
// checkMail('HELLO@GaragE.az  ')

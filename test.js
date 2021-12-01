let numbers = document.querySelectorAll(".number");
let buttons = document.querySelectorAll(".btn");
let operations = document.querySelectorAll(".opration");
let equation = document.getElementById("equation");
let display = document.querySelector(".display");
let result = document.querySelector(".result");
let equal = document.getElementById("eql");
let clear = document.querySelector(".clear")


let oper = '';
let opr = [];
let rslt = null ;
let hstr = null;
let oldEqua = [];


let lastEnter 

let getButtonsValue = (e) => { 
    if(!isNaN(e.target.value)){
        oper =  oper + e.target.value
        display.innerHTML = oper ;
        lastEnter = e.target.value
    }
    else if(isNaN(e.target.value) && !isNaN(lastEnter)){
        console.log(e.target.value)
        lastEnter = e.target.value
        opr.push(oper, e.target.value)
        oldEqua.push(oper, e.target.value)
        equation.innerHTML = oldEqua.join('')
        display.innerHTML = '0'
        oper = '' 
        console.log(opr)
    }
}

let getNewValue = (e) => {
    if(!isNaN(e.target.value)) {
        oper =  String(e.target.value)
        display.innerHTML = oper;
    }else if(isNaN(e.target.value)){
        opr.push(e.target.value)
        oldEqua.push(e.target.value)
        equation.innerHTML = oldEqua.join('')
        display.innerHTML = '0'
        oper = ''
        console.log(opr)
    }
}

let primaryCal = () =>{
    switch (opr[1]){
        case("+"):
        x = opr[3]
        rslt = parseInt(opr[0]) + parseInt(opr[2])
        console.log(rslt)
        opr = []
        opr.push(rslt, x)
        console.log(opr)
        break;

        case("-"):
        x = opr[3]
        hstr = parseInt(opr[0]) - parseInt(opr[2])
        console.log(hstr)
        opr = []
        opr.push(hstr, x)
        console.log(opr)
        break;

        case("*"):
        x = opr[3]
        hstr = parseInt(opr[0]) * parseInt(opr[2])
        console.log(hstr)
        opr = []
        opr.push(hstr, x)
        console.log(opr)
        break;

        case("/"):
        x = opr[3]
        hstr = parseInt(opr[0]) / parseInt(opr[2])
        console.log(hstr)
        opr = []
        opr.push(hstr, x)
        console.log(opr)
        break;

        default: alert('something wrong')
    }
}


let principalCalc = ()=>{
    switch (opr[1]) {
        case "+":
            hstr = parseInt(opr[0]) + parseInt([oper])
            console.log(hstr)
            display.innerHTML = '0'
            oldEqua.push(oper)
            opr = []
            opr.push(hstr)
            console.log(opr)
            oper = ''
            equation.innerHTML = oldEqua.join('')
            result.innerHTML = hstr
            break;

        case "-":
            hstr = parseInt(opr[0]) - parseInt([oper])
            console.log(hstr)
            display.innerHTML = '0'
            oldEqua.push(oper)
            opr = []
            opr.push(hstr)
            oper = ''
            equation.innerHTML = oldEqua.join('')
            result.innerHTML = hstr
            break;

        case "*":
            hstr = parseInt(opr[0]) * parseInt([oper])
            console.log(hstr)
            display.innerHTML = '0'
            oldEqua.push(oper)
            opr.push(hstr)
            oper = ''
            equation.innerHTML = oldEqua.join('')
            result.innerHTML = hstr
            break;

        case "/":
            hstr = parseInt(opr[0]) / parseInt([oper])
            console.log(hstr)
            display.innerHTML = '0'
            oldEqua.push(oper)
            opr.push(hstr)
            oper = ''
            equation.innerHTML = oldEqua.join('')
            result.innerHTML = hstr
            break;

        default:
            alert("something wrong");
    }

}


let ClearAll = () => {
    opr = []
    oper = null
    hstr = null
    rslt = null
    equation.innerHTML = '0'
    display.innerHTML = '0'
    result.innerHTML = '0'
}




buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if(opr.length == 0 || opr.length >= 2){
            getButtonsValue(e)
        }

        if (opr.length >= 3){
            primaryCal()
        }

        if(opr.length == 1){
            getNewValue(e)
        }
    });
});

equal.addEventListener("click", () => {

    principalCalc()

});

clear.addEventListener('click', () => {
    ClearAll()
})








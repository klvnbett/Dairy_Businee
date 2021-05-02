// variable declaration
var shedA;
var shedB;
var shedC;
var shedD;

var sA;
var sB;
var sC;
var sD;

var sheds = [{ name: 'shedA' }, { name: 'shedB' },
    { name: 'shedC' }, { name: 'shedD' }
]

function dailyProduce() {
    shedA = document.getElementById('shedA').value;
    shedB = document.getElementById('shedB').value;
    shedC = document.getElementById('shedC').value;
    shedD = document.getElementById('shedD').value;

    sA = parseFloat(shedA);
    sB = parseFloat(shedB);
    sC = parseFloat(shedC);
    sD = parseFloat(shedD);

    var shedsArray = [sA, sB, sC, sD];
    var totalDaily = shedsArray[0] + shedsArray[1] + shedsArray[2] + shedsArray[3];
    if (isNaN(sA) || isNaN(sB) || isNaN(sC) || isNaN(sD)) {
        alert(" records should not be empty");
    } else {
        document.getElementById("shedsRecord").innerHTML = "production per shed."
        document.getElementById("shed_A").innerHTML = "Your Production In Shed A is " + shedsArray[0] + "liters per day."
        document.getElementById("shed_B").innerHTML = "Your Production In Shed B is " + shedsArray[0] + "liters per day."
        document.getElementById("shed_C").innerHTML = "Your Production In Shed C is " + shedsArray[0] + "liters per day."
        document.getElementById("shed_D").innerHTML = "Your Production In Shed D is " + shedsArray[0] + "liters per day."
        document.getElementById("total").innerHTML = "Your Total Production in all Sheds is" + totalDaily + "liters per day."

    }
}

function calculate() {
    shedA = document.getElementById('shed_A').value;
    shedB = document.getElementById('shed_B').value;
    shedC = document.getElementById('shed_C').value;
    shedD = document.getElementById('shed_D').value;


    sA = parseFloat(shedA);
    sB = parseFloat(shedB);
    sC = parseFloat(shedC);
    sD = parseFloat(shedD);

    var shedsArray = [sA, sB, sC, sD];
    var totalDaily = shedsArray[0] + shedsArray[1] + shedsArray[2] + shedsArray[3];

    if (isNaN(sA) || isNaN(sB) || isNaN(sC) || isNaN(sD)) {
        alert("records should not be empty");

    } else {
        function calc(sellingPrice, time) {
            return sellingPrice * time * totalDaily;
        }

    }

}
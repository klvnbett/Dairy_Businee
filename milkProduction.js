// variable declaration
var shedA;
var shedB;
var shedC;
var shedD;



var sheds = [{ name: 'shed A' }, { name: 'shed B' },
    { name: 'shed C' }, { name: 'shed D' }
]

function dailyProduce() {
    shedA = document.getElementById('shed_A').value;
    shedB = document.getElementById('shed_B').value;
    shedC = document.getElementById('shed_C').value;
    shedD = document.getElementById('shed_D').value;



    var shedsArray = [shedA, shedB, shedC, shedD];
    var totalDaily = shedsArray[0] + shedsArray[1] + shedsArray[2] + shedsArray[3];

    document.getElementById("shedsRecord").innerHTML = "production per shed."
    document.getElementById("shed_A").innerHTML = "Your Production In Shed A is " + shedsArray[0] + "liters per day."
    document.getElementById("shed_B").innerHTML = "Your Production In Shed B is " + shedsArray[0] + "liters per day."
    document.getElementById("shed_C").innerHTML = "Your Production In Shed C is " + shedsArray[0] + "liters per day."
    document.getElementById("shed_D").innerHTML = "Your Production In Shed D is " + shedsArray[0] + "liters per day."
    document.getElementById("total").innerHTML = "Your Total Production in all Sheds is" + totalDaily + "liters per day."

}


function calculate() {
    shedA = document.getElementById('shed_A').value;
    shedB = document.getElementById('shed_B').value;
    shedC = document.getElementById('shed_C').value;
    shedD = document.getElementById('shed_D').value;




    var shedsArray = [shedA, shedB, shedC, shedD];
    var totalDaily = shedsArray[0] + shedsArray[1] + shedsArray[2] + shedsArray[3];

    function incomeOverTime(sellingPrice, time) {
        return sellingPrice * time * totalDaily;
    }
    document.getElementById("weeklyincome").innerHTML = "weekly and yearly income"
    document.getElementById("weekly").innerHTML = " Your weekly income will be Kshs. " + incomeOverTime(45, 7) + ".";
    document.getElementById("yearly").innerHTML = " Your Yearly income will be Kshs. " + incomeOverTime(45, 366) + ".";

}



function monthly() {
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
        "November", "December"
    ];
    shedA = document.getElementById('shed_A').value;
    shedB = document.getElementById('shed_B').value;
    shedC = document.getElementById('shed_C').value;
    shedD = document.getElementById('shed_D').value;

    var shedsArray = [shedA, shedB, shedC, shedD];

    function incomeOverTime(time) {
        return time * totalDaily;
    };

    document.getElementById("Monthlyincome").innerHTML = "monthly output"
    document.getElementById("January").innerHTML = "your income for the moth of " + month[0] + "will be Kshs" + incomeOverTime(31) + "."
    document.getElementById("February").innerHTML = "your income for the moth of " + month[1] + "will be Kshs" + incomeOverTime(29) + "."

}
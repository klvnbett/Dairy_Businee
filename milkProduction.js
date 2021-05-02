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

}
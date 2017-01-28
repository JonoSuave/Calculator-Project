//function myFunction() {
//    
//    var addition = "2+2";
//    addition += " = " + eval(addition);
//    console.log(addition);
//}
//
//function buttonFunction(value) {
//    if(value === 1){
//        document.getElementById('button-script').innerHTML = "So You think You're number One, huh?";
//    }else if(value === 2) {
//        document.getElementById('button-script').innerHTML = "It's a sign of Peace Baby!";
//    }else {
//        document.getElementById('button-script').innerHTML = "You Little Rebel, you!";
//    }
//}
//var number1 = document.getElementById('number1');
//number1.onclick = numberFunction(value){
//    if (value === 1){
//        document.getElementById('answer-block').innerHTML = Number("1");
//    }
//}

var n1 = 0;
var n2 = undefined;
var operator = undefined;

function numberFunction(symbol){
//    var currentScreenText = document.getElementById('answer-block-number');
//    if(currentScreenText.innerHTML !== "0"){
//        currentScreenText.innerHTML = currentScreenText.innerHTML + symbol;
//    }else{
//        currentScreenText.innerHTML = symbol + "";
//    }
    if(operator)
    n2 = parseInt(symbol);
    updateScreen();
};

function updateScreen() {
    var currentScreenText = document.getElementById('answer-block-number');
    if(!n2) {
        currentScreenText.innerHTML = n1 +'';
    } else if(n2 >=0) {
        currentScreenText.innerHTML = n1 + ' ' + operator + ' ' + n2;
    } else if (n2 < 0) {
        currentScreenText.innerHTML = n1 + '(-' + n2 +')';
    }
}

function decimalFunction(value) {
    currentScreenText.innerHTML = currentScreenText.innerHTML + value;
    canDec = true;
}


function clearScreen(){
    document.getElementById('answer-block-number').innerHTML = '0';
};


function combinator(){
    var screen = document.getElementById('answer-block-number');
    var total = eval(screen.innerHTML);
    screen.innerHTML = total + "";
} 

function calc(){
    var screen = document.getElementById('answer-block-number');
    var total = eval(screen.innerHTML);
    screen.innerHTML = total + "";   
}


$(document).ready(function() {
    var canDec = true;
    var canOperator = true;
    var screen = $('#answer-block-number');
    $('.operator').on('click',function(){
        var symbol = $(this).attr('symbol');
        calc();
        $('.highlight').removeClass('highlight');
//        screenText.html...hmmm, how do I clear out the operator sign from current screen.html()?
//        The open html() returns current value
        $(this).addClass('highlight');
        screen.html(screen.html() + symbol);
        canDec = true;
        canOperator=false;
    });
    
    $('.combinator').on('click',function() {
        var symbol = $(this).attr('symbol');
        combinator();
        $('.highlight').removeClass('highlight');
    })
    
    
    $('.number').on('click',function() {
        var symbol = $(this).attr('symbol');
        numberFunction(symbol);
        canOperator = true;
    })
//    $('#plus').on('click',additionFunction);
//    $('#division').on('click',divisionFunction);
    
    $('#decimal').on('click',function(){
        $('.highlight').removeClass('highlight');
        if(canDec){
            screenText = screen.html();
            screen.html(screenText + '.');
            canDec = false;
        }
    });
    
    $('.operator').on('click',function() {
       if(canOperator) {
           
       } 
    });
    
    $('#clear-button').on('click',function() {
        $('.highlight').removeClass('highlight');
        canDec = true;
    });
    
})

//function additionFunction(){
//    var currText = document.getElementById('answer-block-number').innerHTML;
//    console.log(currText);
//    //Break up the string in the #answer-block-number (n1 & n2 parsed numbers)
//    var parsedString = getParsedNumbers(currText);//This will pass currText string into getParsedNumbers(retrievedString) and 
//    //retrievedDomString will equal "123+456"
//    var n1 = parsedString.n1;
//    var n2 = parsedString.n2;
//    //Are there 1 or 2 parsed numbers
//    if (n1.length>0 && n2.length>0){
//        var total = Number(n1) + Number(n2);
//        document.getElementById('answer-block-number').innerHTML = total + "";
//    }
//    //If 2 numbers, add together and add on '.symbol'
//    //Else if only 1 number then just add '.symbol' (already programmed in jQuery code)
//    //Else alert('something is up with additionFunction)
//};
//
//function getParsedNumbers(retrievedDomString) {
//    var parsedNumbers = {};
//    console.log(retrievedDomString);
//    var n1 = "";
//    var n2 = "";
//    var currNumber = "";
//    for(var i = 0;i<retrievedDomString.length;i++){
//        var character = retrievedDomString.charAt(i);
//        if(isNaN(character)){
//            //i.e. it's a symbol
//           n1 = currNumber; 
//            currNumber="";
//        }else if (!isNaN(character)){
//            //i.e. if it's a number
//            currNumber = currNumber + character;
//        }
//    }
//    n2 = currNumber;
//    parsedNumbers.n1 = n1;
//    parsedNumbers.n2 = n2;
//    return parsedNumbers;
//}
//function divisionFunction() {
//    var currText = document.getElementById('answer-block-number').innerHTML;
//    console.log(currText);
//    //Break up the string in the #answer-block-number (n1 & n2 parsed numbers)
//    var parsedString = getParsedNumbers(currText);//This will pass currText string into getParsedNumbers(retrievedString) and 
//    //retrievedDomString will equal "123+456"
//    var n1 = parsedString.n1;
//    var n2 = parsedString.n2;
//    //Are there 1 or 2 parsed numbers
//    if (n1.length>0 && n2.length>0){
//        var total = Number(n1) / Number(n2);
//        document.getElementById('answer-block-number').innerHTML = total + "";
//    }
//    //If 2 numbers, add together and add on '.symbol'
//    //Else if only 1 number then just add '.symbol' (already programmed in jQuery code)
//    //Else alert('something is up with additionFunction)
//};
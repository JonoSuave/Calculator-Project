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

function numberFunction(symbol){
    var currentScreenText = document.getElementById('answer-block-number');
    if(currentScreenText.innerHTML !== "0"){
        currentScreenText.innerHTML = currentScreenText.innerHTML + symbol;
    }else{
        currentScreenText.innerHTML = symbol + "";
    } 
};

function decimalFunction(value) {
    currentScreenText.innerHTML = currentScreenText.innerHTML + value;
}


function clearScreen(){
    document.getElementById('answer-block-number').innerHTML = '0';
};


function combinator(){
    var total = eval(document)
} 

function calc(){
    var screen = document.getElementById('answer-block-number');
    var total = eval(screen.innerHTML);
    screen.innerHTML = total + "";   
}


$(document).ready(function() {
    var screen = $('#answer-block-number');
    var screenText = screen.html();
    var symbol = $(this).attr('symbol');
    $('.operator').on('click',function(){
        calc();
        $('.highlight').removeClass('highlight');
//        screenText.html...hmmm, how do I clear out the operator sign from current screen.html()?
//        The open html() returns current value
        var symbol = $(this).attr('symbol');
        $(this).addClass('highlight');
        screen.html(screenText + symbol);
        
    });
    
    
    $('.number').on('click',function() {
        var symbol = $(this).attr('symbol');
        numberFunction(symbol);
    })
//    $('#plus').on('click',additionFunction);
//    $('#division').on('click',divisionFunction);
    
    $('#decimal').on('click',function(){
        $('.highlight').removeClass('highlight');
        noMultipleDecimal();
    });
    function noMultipleDecimal() {
    var decEnable = true;
    if(decEnable){
            screen.innerHTML = screenText + symbol;
            decEnable = false;
        }else {
            alert("Yo this ain/'t English! Only one '.' mate." );
        }
    }
    
    $('#clear-button').on('click',function() {
        $(this).closest('#Calculator-blue-background').find('.highlight').removeClass('highlight');
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
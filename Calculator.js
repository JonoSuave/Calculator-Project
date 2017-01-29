
var n1 = 0;
var n2 = undefined;
var operator = undefined;

function pageLoad() {
    updateScreen();
}

function presentOperator(symbol){
    if(!operator){
        operator = symbol;
    }else if(operator && n2!=undefined) {
        n1 = parseInt(document.getElementById('answer-block-number'));
        n2 = undefined;
        operator = symbol;
    }
}

function updateScreen() {
    var el = document.getElementById('answer-block-number');
    if(!n2 && operator!=undefined){
        el.innerHTML = n1 + operator;
    }else if(!n2 && !operator) {
        el.innerHTML = n1 + "";
    }else if (n2>=0) {
        el.innerHTML = n1 + operator + n2;
    }else if (n2<0) {
        el.innerHTML = n1 + operator + "(-" + n2 +")";
    }
}

function pressedNumberButton(num) {
    if(!operator && n1 ==='0'){
        n1 = num;
    }else if(!operator && n1!=='0') {
        n1 = n1 + num;
    }else if(operator && (n2 =='0' || n2 ==undefined)) {
        n2 = num;
    }else if(operator && n2!=='0') {
        n2 = n2+num;
    }
}

$(document).ready(function() {
    pageLoad();
    $('.operator').on('click',function() {
        var symbol = $(this).attr('symbol');
        presentOperator(symbol);
        updateScreen();
    });
    
    $('.number').on('click',function(event) {
       var num = $(this).attr('symbol');
       pressedNumberButton(num);
        updateScreen();
    });
    
    function clearScreen(){
    document.getElementById('answer-block-number').innerHTML = '0';
};
    
})
//function numberFunction(symbol){
//    if(operator)
//    n2 = parseInt(symbol);
//    updateScreen();
//};
//
//function updateScreen() {
//    var currentScreenText = document.getElementById('answer-block-number');
//    if(!n2) {
//        currentScreenText.innerHTML = n1 +'';
//    } else if(n2 >=0) {
//        currentScreenText.innerHTML = n1 + ' ' + operator + ' ' + n2;
//    } else if (n2 < 0) {
//        currentScreenText.innerHTML = n1 + '(-' + n2 +')';
//    }
//}
//
//function decimalFunction(value) {
//    currentScreenText.innerHTML = currentScreenText.innerHTML + value;
//    canDec = true;
//}
//
//
function clearScreen(){
    document.getElementById('answer-block-number').innerHTML = '0';
};
//
//
//function combinator(){
//    var screen = document.getElementById('answer-block-number');
//    var total = eval(screen.innerHTML);
//    screen.innerHTML = total + "";
//} 
//
//function calc(){
//    var screen = document.getElementById('answer-block-number');
//    var total = eval(screen.innerHTML);
//    screen.innerHTML = total + "";   
//}
//
//
//$(document).ready(function() {
//    var canDec = true;
//    var canOperator = true;
//    var screen = $('#answer-block-number');
//    $('.operator').on('click',function(){
//        var symbol = $(this).attr('symbol');
//        calc();
//        $('.highlight').removeClass('highlight');
////        screenText.html...hmmm, how do I clear out the operator sign from current screen.html()?
////        The open html() returns current value
//        $(this).addClass('highlight');
//        screen.html(screen.html() + symbol);
//        canDec = true;
//        canOperator=false;
//    });
//    
//    $('.combinator').on('click',function() {
//        var symbol = $(this).attr('symbol');
//        combinator();
//        $('.highlight').removeClass('highlight');
//    })
//    
//    
//    $('.number').on('click',function() {
//        var symbol = $(this).attr('symbol');
//        numberFunction(symbol);
//        canOperator = true;
//    })
////    $('#plus').on('click',additionFunction);
////    $('#division').on('click',divisionFunction);
//    
//    $('#decimal').on('click',function(){
//        $('.highlight').removeClass('highlight');
//        if(canDec){
//            screenText = screen.html();
//            screen.html(screenText + '.');
//            canDec = false;
//        }
//    });
//    
//    $('.operator').on('click',function() {
//       if(canOperator) {
//           
//       } 
//    });
//    
//    $('#clear-button').on('click',function() {
//        $('.highlight').removeClass('highlight');
//        canDec = true;
//    });
//    
//})

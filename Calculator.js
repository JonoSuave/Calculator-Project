
var n1 = 0;
var n2;
var operator = undefined;

var canDec = true;
var screen = $('#answer-block-number');

var dict = {
    48: 0,
    49: 1,
    50: 2,
    51: 3,
    52: 4,
    53: 5,
    54: 6,
    55: 7,
    56: 8,
    57: 9,
    46: 'delete',
    13: '=',
    107: '+',
    109: '-',
    106: '*',
    111: '/',
    110: '.'
}

function pageLoad() {
    updateScreen();
}

function combinator(){
    var screen = document.getElementById('answer-block-number');
    var total = eval(screen.innerHTML);
    screen.innerHTML = total + "";
    n1 = total;
    n2 = 0;
    operator = undefined;
} 

function presentOperator(symbol){
    if(!operator){
        operator = symbol;
    }else if(operator && n2>0) {
        n1 = eval(document.getElementById('answer-block-number').innerHTML);
        n2 = 0;
//        parseInt(document.getElementById('answer-block-number'))
//        n2 = n2;
        operator = symbol;
    }else if(operator && n2<0) {
        var el = document.getElementById('answer-block-number');
        n1 = eval(el.innerHTML);
        n2 = 0;
    }else if(operator && (!n2 || n2 === 0)) {
        operator = symbol;         
    }
}

function makeNegative() {
    var el = document.getElementById('answer-block-number');
    if(n2!==0) {
        el.innerHTML = n1 + operator + "(" + n2 +")";
    }else if(n1 !==0 && !n2) {
        el.innerHTML = n1;
    }
}

function updateScreen(symbol) {
    var el = document.getElementById('answer-block-number');
    if(!n2 && operator!=undefined){
        el.innerHTML = n1 + operator;
    }else if(!n2 && !operator) {
        el.innerHTML = n1 + "";
    }else if (n2>=0 && symbol === operator) {
        el.innerHTML = eval(n1 + operator + n2) + "";
    }else if(n2>=0 && symbol !== operator){
        el.innerHTML = n1 + operator + n2;
    }else if (n2<0) {
        var n2String = n2 + "";
        var evaluate = eval(el.innerHTML);
        el.innerHTML = evaluate;
    }
}

function pressedNumberButton(num) {
    if(!operator && n1 ===0){
        n1 = num;
    }else if(!operator && n1!==0) {
        n1 = n1.toString();
        n1 = n1 + num;
    }else if(operator && (n2 ==0 || n2 ==undefined)) {
        n2 = num;
    }else if(operator && n2!==0) {
        n2 = n2+num;
    }
}

function clearScreen(){
    document.getElementById('answer-block-number').innerHTML = "0";
    n1 = 0
    n2 = undefined;
    operator = undefined;
};

function decimal() {
    if(canDec && !n2){
        n1 = n1 + '.';
        screen.innerHTML = n1;    
    }else if(n2!==0 && n2!==undefined && n2.indexOf('.')===-1) {
        canDec = true;
        n2 = n2 + '.';
        updateScreen();
    }
    canDec = false;
}

$(document).ready(function() {
    pageLoad();
    var screen = $('#answer-block-number');
    var canDec = true;
    $('.operator').on('click',function() {
        var symbol = $(this).attr('symbol');
        presentOperator(symbol);
        updateScreen(symbol);
    });
    
    $('.number').on('click',function(event) {
       var num = $(this).attr('symbol');
       pressedNumberButton(num);
        updateScreen();
    });
    
    $(document).keyup(function(event) {
        var numberPressed = dict[event.keyCode];
        switch (event.keyCode) {
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
                pressedNumberButton(dict[event.keyCode]);
                break;
            case 13:
                combinator();
                break;
            case 46:
                clearScreen();
                break;
            case 110:
                decimal();
            case 106:
            case 107:
            case 109:                               
            case 111: 
                var symbol = dict[event.keyCode];                         
                presentOperator(symbol);
                break;
        }
        updateScreen();
     });
    
    $('#clear-button').on('click',function() {
        clearScreen();
    });
    
    $('.make-negative').on('click',function() {
        var symbol = $(this).attr('symbol');
        if(!n2 && n1 !=='0') {
            n1 = (parseInt(n1)*-1);
        }else if (n2!=='0') {
            n2 = (parseInt(n2)*-1);
        }
        makeNegative();
    })
    
    $('#decimal').on('click',function(){
        decimal();
    });
    
     $('.combinator').on('click',function() {
        var symbol = $(this).attr('symbol');
        combinator();
        canDec = true;
    })
     
     
});
//function clearScreen(){
//    document.getElementById('answer-block-number').innerHTML = '0';
//};
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
//    $('.number').on('click',function() {
//        var symbol = $(this).attr('symbol');
//        numberFunction(symbol);
//        canOperator = true;
//    })
////    $('#plus').on('click',additionFunction);
////    $('#division').on('click',divisionFunction);
//    
    
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

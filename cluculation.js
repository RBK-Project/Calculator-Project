/* Declear the button to the real number */

/*  Numbers of array sign to button  */
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var operaters = ['+','-','*','/'];
var number1;
var number2;
var op;
$(document).ready(function() {  

$('#one').on('click',function(){
	var $one = $('#one').val();
	$one = numbers[1];
	$('.result').append($one);
});

$('#two').on('click',function(){
	var $two = $('#two').val();
	$two = numbers[2];
	$('.result').append($two);
});

$('#three').on('click',function(){
	var $three = $('#three').val();
	$three = numbers[3];
	$('.result').append($three);
});

$('#four').on('click',function(){
	var $four = $('#four').val();
	$four = numbers[4];
	$('.result').append($four);
});

$('#five').on('click',function(){
	var $five = $('#five').val();
	$five = numbers[5];
	$('.result').append($five);
});

$('#six').on('click',function(){
	var $six = $('#six').val();
	$six = numbers[6];
	$('.result').append($six);
});

$('#seven').on('click',function(){
	var $seven = $('#seven').val();
	$seven = numbers[7];
	$('.result').append($seven);
});

$('#eight').on('click',function(){
	var $eight = $('#eight').val();
	$eight = numbers[8];
	$('.result').append($eight);
});

$('#nine').on('click',function(){
	var $nine = $('#nine').val();
	$nine = numbers[9];
	$('.result').append($nine);
});

$('#zero').on('click',function(){
	var $zero = $('#zero').val();
	$zero = numbers[0];
	$('.result').append($zero);
});

$('#clear').on('click',function(){
	$('.result').text('');
	$('.result').show();
});

/* Operaters action   */
 // var operaters = ['+','-','*','/'];

/* Plus operaters */
$('#plus').on('click',function(){
	var $plus = $('#plus').val();
	$plus = operaters[0];
	number1 = $('.result').text();
	op = 'sum';
	$('.result').append($plus);
	$('.result').text('');

});

// -
$('#minus').on('click',function(){
	var $minus = $('#minus').val();
	$minus = operaters[1];
	number1 = $('.result').text();
	op = 'minus';
	$('.result').append($minus);
	$('.result').text('');
});

// *  
$('#mult').on('click',function(){
	var $mult = $('#mult').val();
	$mult = operaters[2];
	number1 = $('.result').text();
	op = 'mult';
	$('.result').append($mult);
	$('.result').text('');
});
// / 

$('#divid').on('click',function(){
	var $divid = $('#divid').val();
	$divid = operaters[3];
	number1 = $('.result').text();
	op = 'divid';
	$('.result').append($divid);
	$('.result').text('');
});

$('#equl').on('click', function(){
	// $('.result').empty();
	// $('.value').
	var total = 0;
	number2 = $('.result').text();
	console.log(number1, number2);
	if(op === 'sum'){
		total = parseInt(number1) + parseInt(number2);
	}
	$('.result').text(total)
	if(op === 'minus') {
		total = parseInt(number1) - parseInt(number2);
	}
	$('.result').text(total);
	if(op === 'mult') {
		total = parseInt(number1) * parseInt(number2);
	}
	$('.result').text(total);
	if(op === 'divid') {
		total = parseInt(number1) / parseInt(number2);
	}
	$('.result').text(total);

});

 

});

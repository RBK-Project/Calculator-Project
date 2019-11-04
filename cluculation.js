/* Declear the button to the real number */

/*  Numbers of array sign to button  */
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var opertrs = ['*', '/','+','-','=','.','%'];
var result ;
var number1;
var number2;

$('#one').on('click',function(){
	var $one = $('#one').val();
	$one = numbers[1];
	$('#result').append($one);
});

$('#two').on('click',function(){
	var $two = $('#two').val();
	$two = numbers[2];
	$('#result').append($two);
});

$('#three').on('click',function(){
	var $three = $('#three').val();
	$three = numbers[3];
	$('#result').append($three);
});

$('#four').on('click',function(){
	var $four = $('#four').val();
	$four = numbers[4];
	$('#result').append($four);
});

$('#five').on('click',function(){
	var $five = $('#five').val();
	$five = numbers[5];
	$('#result').append($five);
});

$('#six').on('click',function(){
	var $six = $('#six').val();
	$six = numbers[6];
	$('#result').append($six);
});

$('#seven').on('click',function(){
	var $seven = $('#seven').val();
	$seven = numbers[7];
	$('#result').append($seven);
});

$('#eight').on('click',function(){
	var $eight = $('#eight').val();
	$eight = numbers[8];
	$('#result').append($eight);
});

$('#nine').on('click',function(){
	var $nine = $('#nine').val();
	$nine = numbers[9];
	$('#result').append($nine);
});

$('#zero').on('click',function(){
	var $zero = $('#zero').val();
	$zero = numbers[0];
	$('#result').append($zero);
});

$('#c').on('click',function(){
	var $c = $('#c').val();
	$c = $('result').val()
	$('#result').empty($c);
});

$('#plus').on('click',function(){
	
});




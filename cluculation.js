// /* Declear the button to the real number */

// /*  Numbers of array sign to button  */
// var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// var opertrs = ['*', '/','+','-','=','.','%'];
// var result ;
// var number1;
// var number2;

// $('#one').on('click',function(){
// 	var $one = $('#one').val();
// 	$one = numbers[1];
// 	$('#result').append($one);
// 	$('#one').fadeOut(300).fadeIn(500);
// });

// $('#two').on('click',function(){
// 	var $two = $('#two').val();
// 	$two = numbers[2];
// 	$('#result').append($two);
// });

// $('#three').on('click',function(){
// 	var $three = $('#three').val();
// 	$three = numbers[3];
// 	$('#result').append($three);
// });

// $('#four').on('click',function(){
// 	var $four = $('#four').val();
// 	$four = numbers[4];
// 	$('#result').append($four);
// });

// $('#five').on('click',function(){
// 	var $five = $('#five').val();
// 	$five = numbers[5];
// 	$('#result').append($five);
// });

// $('#six').on('click',function(){
// 	var $six = $('#six').val();
// 	$six = numbers[6];
// 	$('#result').append($six);
// });

// $('#seven').on('click',function(){
// 	var $seven = $('#seven').val();
// 	$seven = numbers[7];
// 	$('#result').append($seven);
// });

// $('#eight').on('click',function(){
// 	var $eight = $('#eight').val();
// 	$eight = numbers[8];
// 	$('#result').append($eight);
// });

// $('#nine').on('click',function(){
// 	var $nine = $('#nine').val();
// 	$nine = numbers[9];
// 	$('#result').append($nine);
// });

// $('#zero').on('click',function(){
// 	var $zero = $('#zero').val();
// 	$zero = numbers[0];
// 	$('#result').append($zero);
// });

// $('#c').on('click',function(){
// 	var $c = $('#c').val();
// 	$c = $('result').val()
// 	$('#result').empty($c);
// });

// $('#plus').on('click',function(){
	
// });


var before = 0;
var after;
var operator;


$('#one').on('click',function(){
	$('#result').append($('#one').text());
	$('#one').fadeOut(300).fadeIn(500);
});
$('#two').on('click',function(){
	$('#result').append($('#two').text());
	$('#two').fadeOut(300).fadeIn(500);
});
$('#three').on('click',function(){
	$('#result').append($('#three').text());
	$('#three').fadeOut(300).fadeIn(500);
});
$('#four').on('click',function(){
	$('#result').append($('#four').text());
	$('#four').fadeOut(300).fadeIn(500);
});
$('#five').on('click',function(){
	$('#result').append($('#five').text());
	$('#five').fadeOut(300).fadeIn(500);
});
$('#six').on('click',function(){
	$('#result').append($('#six').text());
	$('#six').fadeOut(300).fadeIn(500);
});
$('#seven').on('click',function(){
	$('#result').append($('#seven').text());
	$('#seven').fadeOut(300).fadeIn(500);
});
$('#eight').on('click',function(){
	$('#result').append($('#eight').text());
	$('#eight').fadeOut(300).fadeIn(500);
});
$('#nine').on('click',function(){
	$('#result').append($('#nine').text());
	$('#nine').fadeOut(300).fadeIn(500);
});
$('#zero').on('click',function(){
	$('#result').append($('#zero').text());
	$('#zero').fadeOut(300).fadeIn(500);
});


$('#plus').on('click',function(){
	$('#result').append($('#plus').text());
	$('#plus').fadeOut(300).fadeIn(500);
});
$('#minus').on('click',function(){
	$('#result').append($('#minus').text());
	$('#minus').fadeOut(300).fadeIn(500);
});
$('#star').on('click',function(){
	$('#result').append($('#star').text());
	$('#star').fadeOut(300).fadeIn(500);
});
$('#divide').on('click',function(){
	$('#result').append($('#divide').text());
	$('#divide').fadeOut(300).fadeIn(500);
});
$('#period').on('click',function(){
	$('#result').append($('#period').text());
	$('#period').fadeOut(300).fadeIn(500);
});
$('#zero').on('click',function(){
	var $button = $('#zero');
	$button.fadeOut(300).fadeIn(500);
});

/* Declear the button to the real number */

/*  Numbers of array sign to button  */
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var number1;
var number2;
var op;
var switche = false;
$(document).ready(function() {  
	$('.calculator').hide();
	$('#icon').on('click', function(){
		$('#icon').fadeOut(900);
		$('.calculator').fadeIn(2300);
		// $('#menu').fadeIn(1800); creates the menu.
	})
$('button').on('click', function(){
	$(this).fadeOut(100).fadeIn(120);
	$('button').css('box-shadow','inset 0 0 0px 0px white');
	$(this).css('box-shadow','inset 0 0 8px 2px white');
})
$('#one').on('click',function(){
	var $one = $('#one').val();
	$one = numbers[1];
	$('.result').append($one);
	if(switche === true){
		$('.result').text('');
		switche = false;
		$('.result').append($one);
	}
});

$('#two').on('click',function(){
	var $two = $('#two').val();
	$two = numbers[2];
	$('.result').append($two);
	if(switche === true){
		$('.result').text('');
		switche = false;
		$('.result').append($two);
	}
});

$('#three').on('click',function(){
	var $three = $('#three').val();
	$three = numbers[3];
	$('.result').append($three);
	if(switche === true){
		$('.result').text('');
		switche = false;
		$('.result').append($three);
	}
});
//
$('#four').on('click',function(){
	var $four = $('#four').val();
	$four = numbers[4];
	$('.result').append($four);
	if(switche === true){
		$('.result').text('');
		switche = false;
		$('.result').append($four);
	}
});

$('#five').on('click',function(){
	var $five = $('#five').val();
	$five = numbers[5];
	$('.result').append($five);
	if(switche === true){
		$('.result').text('');
		switche = false;
		$('.result').append($five);
	}
});

$('#six').on('click',function(){
	var $six = $('#six').val();
	$six = numbers[6];
	$('.result').append($six);
	if(switche === true){
		$('.result').text('');
		switche = false;
		$('.result').append($six);
	}
});

$('#seven').on('click',function(){
	var $seven = $('#seven').val();
	$seven = numbers[7];
	$('.result').append($seven);
	if(switche === true){
		$('.result').text('');
		switche = false;
		$('.result').append($seven);
	}
});

$('#eight').on('click',function(){
	var $eight = $('#eight').val();
	$eight = numbers[8];
	$('.result').append($eight);
	if(switche === true){
		$('.result').text('');
		switche = false;
		$('.result').append($eight);
	}
});

$('#nine').on('click',function(){
	var $nine = $('#nine').val();
	$nine = numbers[9];
	$('.result').append($nine);
	if(switche === true){
		$('.result').text('');
		switche = false;
		$('.result').append($nine);
	}
});

$('#zero').on('click',function(){
	var $zero = $('#zero').val();
	$zero = numbers[0];
	$('.result').append($zero);
	if(switche === true){
		$('.result').text('')
		switche = false;
		$('.result').append($zero);
	}
});

$('#period').on('click',function(){
	// var $period = $('#period').val();
	$period = $('#period').text();
	$('.result').append($period);
	if(switche === true){
		$('.result').text('');
		  // switche = false;
		$('.result').append($period);
	}
});

$('#clear').on('click',function(){
	$('.result').text('');

});

/* Operaters action   */
 

/* Plus operaters */
$('#plus').on('click',function(){
	var $plus = $('#plus').text();
	number1 = $('.result').text();
	op = 'sum';
	switche = true;
	// $('.result').append($plus);
	 // $('.result').text('');

});

// -
$('#minus').on('click',function(){
	var $minus = $('#minus').val();
	
	 number1 = $('.result').text();
	 op = 'minus';
	 
	 $('.result').text('');
	 
});

// *  
$('#mult').on('click',function(){
	  var $mult = $('#mult').val();
	  number1 = $('.result').text();
	  op = 'mult';
	  $('.result').text('');
});
// / 

$('#divid').on('click',function(){
	number1 = $('.result').text();
	op = 'divid';
    $('.result').text('');
});

//  %
 $('#percentage').on('click', function(){
 	number1 = $('.result').text();
    var total =  parseInt(number1) / 100;
  	$('.result').text(total);
 })

 $('#sign').on('click', function() {
 	number1 = $('.result').text();
 	number1  =   parseInt(number1) * -1;
	 $('.result').text(number1);
 })



 $('#equal').on('click', function(){
	var total = 0;
	number2 = $('.result').text();
	console.log(number1, number2);
	if(op === 'sum'){
		total = parseFloat(number1) + parseFloat(number2);
	}
	if(op === 'minus') {
		total = parseFloat(number1) - parseFloat(number2);
	};
	if(op === 'mult') {
		total = parseFloat(number1) * parseFloat(number2);
	};
	if(op === 'divid') {
		if(parseFloat(number2) === 0) {
		 total = Error; 
		}
		total = parseFloat(number1) / parseFloat(number2);
	   }
     if(op === 'percentage') {
     	
     }
      $('.result').text(total)
     });
     



 

});

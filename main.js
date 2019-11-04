// var befor = 0;
// var after = 0;

function Culculator() {
	var oper = {};
    oper.add = add ;
    oper.befor = 0;
    oper.after = 0;
    oper.minus = minus;
    // oper.2+36+3 = multiply ;
    oper.divid = divid ;
	return oper;
}
var add = function(a, b){
	this.befor = a;
	this.after = b;
   return a + b ;	
};
var minus = function(a,b){};
var multiply = function(a,b){};
var divid = function(a,b){};

//Jquery
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
$('#one').on('click',function(){
	 alert('click')
	// var  one = numbers[1];
	
});
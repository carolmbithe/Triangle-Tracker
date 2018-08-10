var sideOne=parseInt(prompt("Enter side One"));
var sideTwo=parseInt(prompt("Enter side Two"));
var sideThree=parseInt(prompt("Enter side Three"))
if (sideOne+sideTwo<=sideThree || sideTwo+sideThree<=sideOne ||sideOne+sideThree<=sideTwo){
alert("It's not a triangle");
}
else if (sideOne ===sideTwo &&sideThree===sideTwo) {
alert("It is a equilateral triangle");
} else if (sideOne===sideTwo ||sideTwo===sideThree || sideThree===sideOne) {
alert("It is an isosceles triangle");
} else if (sideOne !==sideTwo || sideTwo !==sideThree ||sideThree !==sideOne) {
alert("Its a scalene triangle");
 }

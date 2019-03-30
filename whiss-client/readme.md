# Documentation

function curry(b) {
	return function a(c) {
		return b * c;
	}
}

let multiplyBy8 = curry(8);

multiplyBy8(4);

<!-- 
function curryFunc(a) {
	return function(b) {
		console.log(a*b)
	}
}


let timesThree = curryFunc(3);

timesThree(5); -->
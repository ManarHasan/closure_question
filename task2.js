// Question:
function multiplyByClosure(mult) {
  const values = [0, 0.5, 1, 2, 3, 4, 5, 'a', false];
  return values.map(function(value) { 
 if(typeof value === 'number') {
  return value * mult
 }
 return value;
  });
}

function countZeroValues(values) {
 return values.filter(function(value) {
  return value == 0
 }).length
}

const multiplyByTwo = multiplyByClosure(2);
console.log(multiplyByTwo);

const multiplyByThree = multiplyByClosure(3);
console.log(multiplyByThree);

// count zero values, expecting 1:
console.log(countZeroValues(multiplyByTwo));

for (var i = 0; i < 10; i++) {
	
 const button = document.createElement('button');
 button.textContent = `Multiply by ${i}`;
 document.body.appendChild(button);

    button.onclick = function() {
        console.log(multiplyByClosure(i))
    };
}

// The countZeroValues function compares to the number 0 using the == operator, which can lead to unexpected results because of things like false and empty strings.

// The button.onclick function will always return the same array because var takes function scope and not block scope.
// This means that all the closures created in the loop capture the same value of i, which is the final value of i after the loop has finished.

// For example:

function countZeroValues(values) {
    return values.filter(function(value) {
     return value === 0
    }).length
   }
// Use let instead of var to declare i, which will give it block scope:

for (let i = 0; i < 10; i++) {
  const button = document.createElement('button');
  button.textContent = `Multiply by ${i}`;
  document.body.appendChild(button);

  button.onclick = function() {
    console.log(multiplyByClosure(i))
  };
}

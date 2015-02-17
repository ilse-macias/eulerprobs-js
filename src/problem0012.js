/*
  The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:

  1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

  Let us list the factors of the first seven triangle numbers:

     1: 1
     3: 1,3
     6: 1,2,3,6
    10: 1,2,5,10
    15: 1,3,5,15
    21: 1,3,7,21
    28: 1,2,4,7,14,28
  
  We can see that 28 is the first triangle number to have over five divisors.

  What is the value of the first triangle number to have over five hundred divisors?
 */

(function() {

  function getTriangleNumber(number) {
    var sum = 0;
    for(var i = 1; i <= number; i++) {
      sum += i;
    }
    return sum;
  }

  function getNumberOfDivisors(number) {
    var divisors = 0;
    for(var i = 1; i <= number; i++) {
      if(number % i === 0) {
        divisors++;
      }
    }
    return divisors;
  }

  function getTriangleWithNDivisors(number) {
    //headstart?
    var current = number;

    while(current < Number.MAX_VALUE) {
      var triangle = getTriangleNumber(current);
      var divisors = getNumberOfDivisors(triangle);
      if(divisors >= number) {
        //the answer wants the triangle number, not the number
        return triangle;
      }
      current++;
    }
    return -1;
  }


  var answer = getTriangleWithNDivisors(501);
  console.log("Answer: " + answer);

})();
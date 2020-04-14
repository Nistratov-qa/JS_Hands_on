function mul(a, b) {
  return a * b
}

Function.prototype.bind1 = function (newThis) {
  var boundTargetFunction = this;
  var boundArguments = Array.prototype.slice.call(arguments, 1);
  return function boundFunction() {
    var targetArguments = Array.prototype.slice.call(arguments);
    return boundTargetFunction.apply(newThis, boundArguments.concat(targetArguments)
    );
  };
};

let double = mul.bind1(null, 2);

console.log(double(3)); // = mul(2, 3) = 6
console.log(double(4)); // = mul(2, 4) = 8
console.log(double(5)); // = mul(2, 5) = 10
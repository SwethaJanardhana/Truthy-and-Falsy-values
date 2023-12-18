let truthyOrFalsy = Boolean(3 >= 2);
console.log("The expression 3 >= 2 is " + truthyOrFalsy);

truthyOrFalsy = Boolean(2 == "2");
console.log('The expression 2 == "2" is ' + truthyOrFalsy);

truthyOrFalsy = Boolean(2 === "2");
console.log('The expression 2 === "2" is ' + truthyOrFalsy);

truthyOrFalsy = Boolean(2 === 2);
console.log("The expression 2 === 2 is " + truthyOrFalsy);

truthyOrFalsy = Boolean("hello world");
console.log('The expression "hello world" is ' + truthyOrFalsy);

truthyOrFalsy = Boolean("");
console.log('The expression "" is ' + truthyOrFalsy);

truthyOrFalsy = Boolean(true);
console.log("The expression true is " + truthyOrFalsy);

truthyOrFalsy = Boolean(0);
console.log("The expression 0 is " + truthyOrFalsy);

truthyOrFalsy = Boolean(-50);
console.log("The expression -50 is " + truthyOrFalsy);

truthyOrFalsy = Boolean(50);
console.log("The expression 50 is " + truthyOrFalsy);

truthyOrFalsy = Boolean(5 > 1);
console.log("The expression 5 > 1 is " + truthyOrFalsy);

truthyOrFalsy = Boolean("1 > 10");
console.log('The expression "1 > 10" is ' + truthyOrFalsy);

truthyOrFalsy = Boolean("false");
console.log('The expression "false" is ' + truthyOrFalsy);

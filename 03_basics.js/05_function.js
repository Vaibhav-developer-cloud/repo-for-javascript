// Immediately Invoked Functions Expressions(IIFE)
//this main question write two IIFE in one js file
(function chai(){
    console.log(`DB CONNECTED`)
})();

// IIFEs are useful for creating local scope so that variables inside 
// the function do not pollute the global scope.

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);

})("vaibhav")




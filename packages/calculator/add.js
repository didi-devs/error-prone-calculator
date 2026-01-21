import { validateNumber } from "../../index.js";

var a, b;
var add = function(a, b) {
    validateNumber(a);
    validateNumber(b);
    return a + b;
    
}
try{
        if (a != NaN && b != NaN) {
            console.log("Both a and b are numbers");
        } else {    
            console.log("Invalid number provided");
        }
    } catch (err) {
        console.log("Error validating numbers:", err);
    }

export { add };
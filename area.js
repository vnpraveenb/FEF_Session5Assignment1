var radius = parseInt(prompt("To find the circle's area, input the value of the radius")); // To get user input

// Function declaration to find the area of the circle
function area(radius){ 
       var circleArea = Math.PI*radius*radius;
    return circleArea ;
}
// Writes the result on the loaded page
document.write("The area of the circle with radius " + radius + " is: " + area(radius));